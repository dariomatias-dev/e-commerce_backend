import { Injectable } from '@nestjs/common';

import { CreatePhysicalPersonUserDto } from './dto/create-physical-person-user.dto';
import { UpdatePhysicalPersonUserDto } from './dto/update-physical-person-user.dto';

@Injectable()
export class PhysicalPersonUserService {
  create(createPhysicalPersonUserDto: CreatePhysicalPersonUserDto) {
    return 'This action adds a new physicalPersonUser';
  }

  findAll() {
    return `This action returns all physicalPersonUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} physicalPersonUser`;
  }

  update(id: number, updatePhysicalPersonUserDto: UpdatePhysicalPersonUserDto) {
    return `This action updates a #${id} physicalPersonUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} physicalPersonUser`;
  }
}
