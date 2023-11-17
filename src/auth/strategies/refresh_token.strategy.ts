import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from 'src/user/user.service';

import { User } from 'src/user/entities/user.entity';
import { UserFromJwt } from '../models/UserFromJwt';
import { TokenType } from 'src/enums/token_type';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh_token_strategy',
) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  async validate(payload: UserFromJwt) {
    if (payload.token_type != TokenType.Refresh) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this._validateUser(payload.email);

    return user;
  }

  private async _validateUser(email: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      return user;
    }

    throw new UnauthorizedException('Invalid refresh token');
  }
}
