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

import { PhysicalPersonUserService } from './physical-person-user.service';

import { CreatePhysicalPersonUserDto } from './dto/create-physical-person-user.dto';
import { UpdatePhysicalPersonUserDto } from './dto/update-physical-person-user.dto';

@Controller()
export class PhysicalPersonUserController {
  constructor(
    private readonly physicalPersonUserService: PhysicalPersonUserService,
  ) {}

  @Post('physical-person-user')
  create(@Body() createPhysicalPersonUserDto: CreatePhysicalPersonUserDto) {
    return this.physicalPersonUserService.create(createPhysicalPersonUserDto);
  }

  @Get('physical-person-users')
  findAll() {
    return this.physicalPersonUserService.findAll();
  }

  @Get('physical-person-user/:id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.physicalPersonUserService.findOne(id);
  }

  @Patch('physical-person-user/:id')
  update(
    @Param() { id }: UuidParamDto,
    @Body() updatePhysicalPersonUserDto: UpdatePhysicalPersonUserDto,
  ) {
    return this.physicalPersonUserService.update(
      id,
      updatePhysicalPersonUserDto,
    );
  }

  @Delete('physical-person-user/:id')
  remove(@Param() { id }: UuidParamDto) {
    return this.physicalPersonUserService.remove(id);
  }
}
