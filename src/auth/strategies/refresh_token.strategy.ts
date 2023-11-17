import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { TokenType } from 'src/enums/token_type';
import { PhysicalPersonUser } from 'src/physical-person-user/entities/physical-person-user.entity';
import { PhysicalPersonUserService } from 'src/physical-person-user/physical-person-user.service';

import { UserFromJwt } from '../models/UserFromJwt';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh_token_strategy',
) {
  constructor(
    private readonly physicalPersonUserService: PhysicalPersonUserService,
  ) {
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

  private async _validateUser(email: string): Promise<PhysicalPersonUser> {
    //const user = await this.physicalPersonUserService.findByEmail(email);
    const user = {} as PhysicalPersonUser;

    if (user) {
      return user;
    }

    throw new UnauthorizedException('Invalid refresh token');
  }
}
