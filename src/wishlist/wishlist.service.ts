import { Injectable } from '@nestjs/common';

import { UpdateWishlistDto } from './dto/update-wishlist.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlistService {
  constructor(private readonly prisma: PrismaService) {}
  async findOne(id: string) {
    const result = await this.prisma.wishlists.findUnique({
      where: {
        userId: id,
      },
    });

    return result?.productIds ?? [];
  }

  async update(id: string, updateWishlistDto: UpdateWishlistDto) {
    const wishlist = await this.prisma.wishlists.update({
      where: {
        userId: id,
      },
      data: updateWishlistDto,
    });

    return wishlist;
  }

  async remove(id: string) {
    const wishlist = await this.prisma.wishlists.delete({
      where: {
        userId: id,
      },
    });

    return wishlist;
  }
}
