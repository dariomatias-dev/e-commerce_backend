import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CreatePersonalAccountDto } from './dto/create-personal-account.dto';
import { UpdatePersonalAccountDto } from './dto/update-personal-account.dto';

import { PersonalAccountService } from './personal-account.service';

import { RolesGuard } from 'src/auth/guards/roles.guard';

import { UuidParamDto } from 'src/common/dto/uuid-param.dto';

import { IsPublic } from 'src/decorators/is-public.decorator';
import { Roles } from 'src/decorators/roles.decorator';

import { Role } from 'src/enums/role.enum';

@Controller()
export class PersonalAccountController {
  constructor(
    private readonly personalAccountService: PersonalAccountService,
  ) {}

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  @Post('admin-account')
  createAdminAccount(
    @Body() createPersonalAccountDto: CreatePersonalAccountDto,
  ) {
    return this.personalAccountService.createAdminAccount(
      createPersonalAccountDto,
    );
  }

  @IsPublic()
  @Post('personal-account')
  create(@Body() createPersonalAccountDto: CreatePersonalAccountDto) {
    return this.personalAccountService.create(createPersonalAccountDto);
  }

  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
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
