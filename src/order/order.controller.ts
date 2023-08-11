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

import { UuidParamDto } from 'src/common/dto/uuid-param.dto';

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

  @Delete('order:id')
  remove(@Param() { id }: UuidParamDto) {
    return this.orderService.remove(id);
  }
}
