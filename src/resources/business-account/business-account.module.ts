import { Module } from '@nestjs/common';

import { BusinessAccountService } from './business-account.service';
import { BusinessAccountController } from './business-account.controller';

@Module({
  controllers: [BusinessAccountController],
  providers: [BusinessAccountService],
})
export class BusinessAccountModule {}
