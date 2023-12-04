import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { OrderService } from './order.service';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

import { UuidParamDto } from '../../common/dto/uuid-param.dto';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('order')
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get('order/:id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.orderService.findOne(id);
  }

  @Get('orders')
  findAll() {
    return this.orderService.findAll();
  }

  @Patch('order/:id')
  update(
    @Param() { id }: UuidParamDto,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Patch('order/:id/item')
  updateOrderWithItem(
    @Param() { id }: UuidParamDto,
    @Body() createOrderItemDto: CreateOrderItemDto,
  ) {
    return this.orderService.updateOrderWithItem(id, createOrderItemDto);
  }

  @Patch('order/item/:id')
  updateOrderItem(
    @Param() { id }: UuidParamDto,
    @Body() orderItem: UpdateOrderItemDto,
  ) {
    return this.orderService.updateOrderItem(id, orderItem);
  }

  @Delete('order:id')
  remove(@Param() { id }: UuidParamDto) {
    return this.orderService.remove(id);
  }

  @Delete('order/item/:id')
  removeOrderItem(@Param() { id }: UuidParamDto) {
    return this.orderService.removeOrderItem(id);
  }
}
