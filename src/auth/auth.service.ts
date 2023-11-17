import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PhysicalPersonUserService } from './../physical-person-user/physical-person-user.service';

import { UnauthorizedError } from './errors/unauthorized.error';

@Injectable()
export class AuthService {
  constructor(
    private readonly physicalPersonUserService: PhysicalPersonUserService,
  ) {}

  async validateUser(email: string, password: string) {
    // const user = await this.physicalPersonUserService.findByEmail(email);
    // if (user) {
    //   const isPasswordValid = await bcrypt.compare(password, user.password);
    //   if (isPasswordValid) {
    //     return {
    //       id: user.id,
    //       email: user.email,
    //       roles: user.roles,
    //     };
    //   }
    // }
    // throw new UnauthorizedError(
    //   'Email address or password provided is incorrect.',
    // );
  }
}
