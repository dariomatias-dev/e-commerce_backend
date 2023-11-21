import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserFromJwt } from '../models/UserFromJwt';

import { TokenType } from 'src/enums/token_type';

import { PersonalAccount } from 'src/resources/personal-account/entities/personal-account.entity';
import { PersonalAccountService } from 'src/resources/personal-account/personal-account.service';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh_token_strategy',
) {
  constructor(private readonly personalAccountService: PersonalAccountService) {
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

  private async _validateUser(email: string): Promise<PersonalAccount> {
    const user = await this.personalAccountService.findByEmail(email);

    if (user) {
      return user;
    }

    throw new UnauthorizedException('Invalid refresh token');
  }
}
