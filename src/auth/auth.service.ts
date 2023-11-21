import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UnauthorizedError } from './errors/unauthorized.error';

import { Tokens } from './models/Tokens';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

import { TokenType } from 'src/enums/token_type';

import { PrismaService } from 'src/prisma/prisma.service';

import { PersonalAccount } from 'src/resources/personal-account/entities/personal-account.entity';
import { PersonalAccountService } from 'src/resources/personal-account/personal-account.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly personalAccountService: PersonalAccountService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async login(user: PersonalAccount): Promise<UserToken> {
    const tokens = await this._generateTokens(user);

    await this.prisma.personalAccounts.update({
      where: {
        email: user.email,
      },
      data: {
        refreshToken: {
          create: {
            token: tokens.refresh_token,
          },
        },
      },
    });

    return tokens;
  }

  async refresh(user: PersonalAccount) {
    const tokens = await this._generateTokens(user);

    await this.prisma.personalAccounts.update({
      where: {
        email: user.email,
      },
      data: {
        refreshToken: {
          update: {
            token: tokens.refresh_token,
          },
        },
      },
    });

    return tokens;
  }

  async validateUser(email: string, password: string) {
    const user = await this.personalAccountService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          id: user.id,
          email: user.email,
          roles: user.roles,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }

  private async _generateTokens(user: PersonalAccount): Promise<Tokens> {
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

    return {
      access_token,
      refresh_token,
    };
  }

  private async _generateToken(
    user: PersonalAccount,
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
