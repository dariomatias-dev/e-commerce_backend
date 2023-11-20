import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { UuidParamDto } from 'src/common/dto/uuid-param.dto';

import { CreatePersonalAccountDto } from './dto/create-personal-account.dto';
import { UpdatePersonalAccountDto } from './dto/update-personal-account.dto';

import { PersonalAccountService } from './personal-account.service';

@Controller()
export class PersonalAccountController {
  constructor(
    private readonly personalAccountService: PersonalAccountService,
  ) {}

  @Post('personal-account')
  create(@Body() createPersonalAccountDto: CreatePersonalAccountDto) {
    return this.personalAccountService.create(createPersonalAccountDto);
  }

  @Get('personal-accounts')
  findAll() {
    return this.personalAccountService.findAll();
  }

  @Get('personal-account/:id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.personalAccountService.findOne(id);
  }

  @Patch('personal-account/:id')
  update(
    @Param() { id }: UuidParamDto,
    @Body() updatePersonalAccountDto: UpdatePersonalAccountDto,
  ) {
    return this.personalAccountService.update(id, updatePersonalAccountDto);
  }

  @Delete('personal-account/:id')
  remove(@Param() { id }: UuidParamDto) {
    return this.personalAccountService.remove(id);
  }
}
