import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { CreatePersonalAccountDto } from './dto/create-personal-account.dto';
import { UpdatePersonalAccountDto } from './dto/update-personal-account.dto';

@Injectable()
export class PersonalAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPersonalAccountDto: CreatePersonalAccountDto) {
    const PersonalAccount = await this.prisma.personalAccounts.create({
      data: createPersonalAccountDto,
    });

    return PersonalAccount;
  }

  async findAll() {
    const PersonalAccounts = await this.prisma.personalAccounts.findMany();

    return PersonalAccounts;
  }

  async findOne(id: string) {
    const PersonalAccount = await this.prisma.personalAccounts.findUnique({
      where: { id },
    });

    if (!PersonalAccount) {
      throw new NotFoundException('User not found');
    }

    return PersonalAccount;
  }

  async findOneByEmail(email: string) {
    const user = await this.prisma.personalAccounts.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async update(id: string, updatePersonalAccountDto: UpdatePersonalAccountDto) {
    const PersonalAccount = await this.prisma.personalAccounts.update({
      where: { id },
      data: updatePersonalAccountDto,
    });

    return PersonalAccount;
  }

  async remove(id: string) {
    const PersonalAccount = await this.prisma.personalAccounts.delete({
      where: { id },
    });

    return PersonalAccount;
  }
}
