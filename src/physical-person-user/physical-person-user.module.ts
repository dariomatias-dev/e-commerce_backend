import { Module } from '@nestjs/common';

import { PhysicalPersonUserService } from './physical-person-user.service';

import { PhysicalPersonUserController } from './physical-person-user.controller';

@Module({
  controllers: [PhysicalPersonUserController],
  providers: [PhysicalPersonUserService],
})
export class PhysicalPersonUserModule {}
