import { Injectable } from '@nestjs/common';

import { CreateBusinessAccountDto } from './dto/create-business-account.dto';
import { UpdateBusinessAccountDto } from './dto/update-business-account.dto';

@Injectable()
export class BusinessAccountService {
  create(createBusinessAccountDto: CreateBusinessAccountDto) {
    return 'This action adds a new businessAccount';
  }

  findAll() {
    return `This action returns all businessAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessAccount`;
  }

  update(id: number, updateBusinessAccountDto: UpdateBusinessAccountDto) {
    return `This action updates a #${id} businessAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessAccount`;
  }
}
