import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { AuthRequest } from '../models/AuthRequest';

import { ROLES_KEY } from 'src/decorators/roles.decorator';

import { Role } from 'src/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest<AuthRequest>();

    const userRoles = request.user.roles;

    const isAdmin = userRoles.includes(Role.Admin);

    if (isAdmin) {
      return true;
    }

    const isAuthorized = requiredRoles.some((requiredRole) => {
      return userRoles.includes(requiredRole);
    });

    if (!isAuthorized) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
