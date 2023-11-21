import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreatePersonalAccountDto } from './dto/create-personal-account.dto';
import { UpdatePersonalAccountDto } from './dto/update-personal-account.dto';

import { PrismaService } from 'src/prisma/prisma.service';

import { Role } from 'src/enums/role.enum';

@Injectable()
export class PersonalAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async createAdminAccount(createPersonalAccountDto: CreatePersonalAccountDto) {
    return this._createAccount(createPersonalAccountDto, Role.Admin);
  }

  async create(createPersonalAccountDto: CreatePersonalAccountDto) {
    return this._createAccount(createPersonalAccountDto, Role.User);
  }

  async _createAccount(
    createPersonalAccountDto: CreatePersonalAccountDto,
    accountType: string,
  ) {
    const password = createPersonalAccountDto.password;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const PersonalAccount = await this.prisma.personalAccounts.create({
      data: {
        ...createPersonalAccountDto,
        password: encryptedPassword,
        roles: [accountType],
      },
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

  async findByEmail(email: string) {
    const user = await this.prisma.personalAccounts.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async update(id: string, updatePersonalAccountDto: UpdatePersonalAccountDto) {
    const password = updatePersonalAccountDto.password;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const PersonalAccount = await this.prisma.personalAccounts.update({
      where: { id },
      data: {
        password: encryptedPassword,
        ...updatePersonalAccountDto,
      },
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
