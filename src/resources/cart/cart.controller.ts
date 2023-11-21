import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';

import { CartService } from './cart.service';

import { UpdateCartDto } from './dto/update-cart.dto';

import { UuidParamDto } from '../../common/dto/uuid-param.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.cartService.findOne(id);
  }

  @Put(':id')
  update(@Param() { id }: UuidParamDto, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param() { id }: UuidParamDto) {
    return this.cartService.remove(id);
  }
}
