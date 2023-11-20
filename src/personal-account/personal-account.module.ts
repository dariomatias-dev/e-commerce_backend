import { Module } from '@nestjs/common';

import { PersonalAccountService } from './personal-account.service';
import { PersonalAccountController } from './personal-account.controller';

@Module({
  controllers: [PersonalAccountController],
  providers: [PersonalAccountService],
})
export class PersonalAccountModule {}
