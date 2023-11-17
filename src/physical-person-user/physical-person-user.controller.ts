import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { PhysicalPersonUserService } from './physical-person-user.service';

import { CreatePhysicalPersonUserDto } from './dto/create-physical-person-user.dto';
import { UpdatePhysicalPersonUserDto } from './dto/update-physical-person-user.dto';

@Controller('physical-person-user')
export class PhysicalPersonUserController {
  constructor(
    private readonly physicalPersonUserService: PhysicalPersonUserService,
  ) {}

  @Post()
  create(@Body() createPhysicalPersonUserDto: CreatePhysicalPersonUserDto) {
    return this.physicalPersonUserService.create(createPhysicalPersonUserDto);
  }

  @Get()
  findAll() {
    return this.physicalPersonUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.physicalPersonUserService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhysicalPersonUserDto: UpdatePhysicalPersonUserDto,
  ) {
    return this.physicalPersonUserService.update(
      +id,
      updatePhysicalPersonUserDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.physicalPersonUserService.remove(+id);
  }
}
