import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreateBusinessAccountDto } from './dto/create-business-account.dto';
import { UpdateBusinessAccountDto } from './dto/update-business-account.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BusinessAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBusinessAccountDto: CreateBusinessAccountDto) {
    const password = createBusinessAccountDto.password;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.businessAccounts.create({
      data: {
        password: encryptedPassword,
        ...createBusinessAccountDto,
      },
    });

    return user;
  }

  async findAll() {
    const accounts = await this.prisma.businessAccounts.findMany();

    return accounts;
  }

  async findOne(id: string) {
    const account = await this.prisma.businessAccounts.findUnique({
      where: { id },
    });

    return account;
  }

  async findByEmaiil(email: string) {
    const account = await this.prisma.businessAccounts.findUnique({
      where: { email },
    });

    return account;
  }

  async update(id: string, updateBusinessAccountDto: UpdateBusinessAccountDto) {
    const password = updateBusinessAccountDto.password;
    const encryptedPassword =
      password != null ? await bcrypt.hash(password, 10) : null;

    const account = await this.prisma.businessAccounts.update({
      where: { id },
      data: {
        password: encryptedPassword,
        ...updateBusinessAccountDto,
      },
    });

    return account;
  }

  async remove(id: string) {
    const account = await this.prisma.businessAccounts.delete({
      where: { id },
    });

    return account;
  }
}
