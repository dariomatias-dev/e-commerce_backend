import { Injectable } from '@nestjs/common';

import { UpdateCartDto } from './dto/update-cart.dto';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const result = await this.prisma.carts.findUnique({
      where: {
        userId: id,
      },
    });

    return result?.productIds;
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    const result = await this.prisma.carts.update({
      where: {
        userId: id,
      },
      data: updateCartDto,
    });

    return result?.productIds;
  }

  async remove(id: string) {
    const cart = await this.prisma.carts.delete({
      where: {
        userId: id,
      },
    });

    return cart;
  }
}
