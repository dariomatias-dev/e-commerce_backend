import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { BusinessAccountService } from './business-account.service';

import { CreateBusinessAccountDto } from './dto/create-business-account.dto';
import { UpdateBusinessAccountDto } from './dto/update-business-account.dto';

import { UuidParamDto } from 'src/common/dto/uuid-param.dto';

@Controller()
export class BusinessAccountController {
  constructor(
    private readonly businessAccountService: BusinessAccountService,
  ) {}

  @Post('business-account')
  create(@Body() createBusinessAccountDto: CreateBusinessAccountDto) {
    return this.businessAccountService.create(createBusinessAccountDto);
  }

  @Get('business-accounts')
  findAll() {
    return this.businessAccountService.findAll();
  }

  @Get('business-account/:id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.businessAccountService.findOne(id);
  }

  @Patch('business-account/:id')
  update(
    @Param() { id }: UuidParamDto,
    @Body() updateBusinessAccountDto: UpdateBusinessAccountDto,
  ) {
    return this.businessAccountService.update(id, updateBusinessAccountDto);
  }

  @Delete('business-account/:id')
  remove(@Param() { id }: UuidParamDto) {
    return this.businessAccountService.remove(id);
  }
}
