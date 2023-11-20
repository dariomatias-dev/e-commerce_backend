import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePhysicalPersonUserDto } from './dto/create-physical-person-user.dto';
import { UpdatePhysicalPersonUserDto } from './dto/update-physical-person-user.dto';

@Injectable()
export class PhysicalPersonUserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPhysicalPersonUserDto: CreatePhysicalPersonUserDto) {
    const physicalPersonUser = await this.prisma.physicalPersonUsers.create({
      data: createPhysicalPersonUserDto,
    });

    return physicalPersonUser;
  }

  async findAll() {
    const physicalPersonUsers =
      await this.prisma.physicalPersonUsers.findMany();

    return physicalPersonUsers;
  }

  async findOne(id: string) {
    const physicalPersonUser = await this.prisma.physicalPersonUsers.findUnique(
      {
        where: { id },
      },
    );

    if (!physicalPersonUser) {
      throw new NotFoundException('User not found');
    }

    return physicalPersonUser;
  }

  async findOneByEmail(email: string) {
    const user = await this.prisma.physicalPersonUsers.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async update(
    id: string,
    updatePhysicalPersonUserDto: UpdatePhysicalPersonUserDto,
  ) {
    const physicalPersonUser = await this.prisma.physicalPersonUsers.update({
      where: { id },
      data: updatePhysicalPersonUserDto,
    });

    return physicalPersonUser;
  }

  async remove(id: string) {
    const physicalPersonUser = await this.prisma.physicalPersonUsers.delete({
      where: { id },
    });

    return physicalPersonUser;
  }
}
