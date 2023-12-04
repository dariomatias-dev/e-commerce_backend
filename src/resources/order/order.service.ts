import { Injectable } from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

import { orderSelection } from './selections/order.selection';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ userId, orderItems, totalAmount }: CreateOrderDto) {
    const orders = await this.prisma.orders.create({
      select: orderSelection,
      data: {
        userId,
        orderItems: {
          create: orderItems.map((orderItem) => {
            return { ...orderItem };
          }),
        },
        totalAmount,
      },
    });

    return orders;
  }

  async findOne(id: string) {
    const order = await this.prisma.orders.findUnique({
      select: orderSelection,
      where: {
        id,
      },
    });

    return order;
  }

  async findAll() {
    const orders = await this.prisma.orders.findMany({
      select: orderSelection,
    });

    return orders;
  }

  async update(id: string, { userId, totalAmount }: UpdateOrderDto) {
    const order = await this.prisma.orders.update({
      where: {
        id,
      },
      select: orderSelection,
      data: {
        userId,
        totalAmount,
      },
    });

    return order;
  }

  async updateOrderWithItem(id: string, createOrderItem: CreateOrderItemDto) {
    const result = await this.prisma.orders.update({
      where: {
        id,
      },
      select: orderSelection,
      data: {
        orderItems: {
          create: createOrderItem,
        },
      },
    });

    return result;
  }

  async updateOrderItem(id: string, orderItem: UpdateOrderItemDto) {
    const result = await this.prisma.orderItems.update({
      where: {
        id,
      },
      select: orderSelection,
      data: orderItem,
    });

    return result;
  }

  async remove(id: string) {
    const order = await this.prisma.orders.delete({
      where: {
        id,
      },
      select: orderSelection,
    });

    return order;
  }

  async removeOrderItem(id: string) {
    const result = await this.prisma.orderItems.delete({
      where: { id },
      select: orderSelection,
    });

    return result;
  }
}
