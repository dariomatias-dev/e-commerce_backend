import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { UuidParamDto } from 'src/common/dto/uuid-param.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}
  @Get(':id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.wishlistService.findOne(id);
  }

  @Put(':id')
  update(
    @Param() { id }: UuidParamDto,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ) {
    return this.wishlistService.update(id, updateWishlistDto);
  }

  @Delete(':id')
  remove(@Param() { id }: UuidParamDto) {
    return this.wishlistService.remove(id);
  }
}
