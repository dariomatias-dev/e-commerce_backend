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
  findOne(@Param('id') id: string) {
    return this.businessAccountService.findOne(+id);
  }

  @Patch('business-account/:id')
  update(
    @Param('id') id: string,
    @Body() updateBusinessAccountDto: UpdateBusinessAccountDto,
  ) {
    return this.businessAccountService.update(+id, updateBusinessAccountDto);
  }

  @Delete('business-account/:id')
  remove(@Param('id') id: string) {
    return this.businessAccountService.remove(+id);
  }
}
