import { Injectable } from '@nestjs/common';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  findOne(id: string) {
    return `This action returns a #${id} cart`;
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: string) {
    return `This action removes a #${id} cart`;
  }
}
