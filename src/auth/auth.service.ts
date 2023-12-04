import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UnauthorizedError } from './errors/unauthorized.error';

import { Tokens } from './models/Tokens';
import { UserPayload } from './models/UserPayload';

import { TokenType } from 'src/enums/token_type';

import { PrismaService } from 'src/prisma/prisma.service';

import { BusinessAccountService } from 'src/resources/business-account/business-account.service';
import { BusinessAccount } from 'src/resources/business-account/entities/business-account.entity';
import { PersonalAccount } from 'src/resources/personal-account/entities/personal-account.entity';
import { PersonalAccountService } from 'src/resources/personal-account/personal-account.service';
import { UserFromJwt } from './models/UserFromJwt';
import { AccountType } from 'src/enums/account_type.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly personalAccountService: PersonalAccountService,
    private readonly businessAccountService: BusinessAccountService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async validateUser(email: string, password: string) {
    let user: PersonalAccount | BusinessAccount =
      await this.personalAccountService.findByEmail(email);

    if (!user) {
      user = await this.businessAccountService.findByEmail(email);
    }
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          id: user.id,
          email: user.email,
          roles: user.roles,
          accountType: user.accountType,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }

  async generateTokens(user: UserFromJwt): Promise<Tokens> {
    const access_token = await this._generateToken(
      user,
      TokenType.Access,
      '1h',
    );

    const refresh_token = await this._generateToken(
      user,
      TokenType.Refresh,
      '7d',
    );

    const userRefreshTokenUpdate = {
      where: {
        email: user.email,
      },
      data: {
        refreshToken: {
          upsert: {
            create: {
              token: refresh_token,
            },
            update: {
              token: refresh_token,
            },
          },
        },
      },
    };

    if (user.accountType == AccountType.Personal) {
      await this.prisma.personalAccounts.update(userRefreshTokenUpdate);
    } else {
      await this.prisma.businessAccounts.update(userRefreshTokenUpdate);
    }

    return {
      access_token,
      refresh_token,
    };
  }

  private async _generateToken(
    user: UserFromJwt,
    tokenType: TokenType,
    expiresIn: string,
  ) {
    const payload: UserPayload = {
      sub: user.id,
      token_type: tokenType,
      email: user.email,
      roles: user.roles,
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: expiresIn,
    });

    return token;
  }
}
