import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

import { LoginRequestBody } from '../models/LoginRequestBody';
import { UserFromJwt } from '../models/UserFromJwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string): Promise<UserFromJwt> {
    const body = new LoginRequestBody();
    body.email = email;
    body.password = password;
    await this._isValidData(body);

    const user = await this.authService.validateUser(email, password);

    return user;
  }

  private async _isValidData(body: LoginRequestBody): Promise<void> {
    const loginRequestBody = plainToClass(LoginRequestBody, body);

    const errors = await validate(loginRequestBody);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
  }
}
