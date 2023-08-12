import { Injectable } from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ userId, orderItems, totalAmount }: CreateOrderDto) {
    const orders = await this.prisma.orders.create({
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
      where: {
        id,
      },
      include: {
        orderItems: true,
      },
    });

    return order;
  }

  async findAll() {
    const orders = await this.prisma.orders.findMany({
      include: {
        orderItems: true,
      },
    });

    return orders;
  }

  async update(id: string, { userId, totalAmount }: UpdateOrderDto) {
    const order = await this.prisma.orders.update({
      where: {
        id,
      },
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
      data: orderItem,
    });

    return result;
  }

  async remove(id: string) {
    const order = await this.prisma.orders.delete({
      where: {
        id,
      },
    });

    return order;
  }

  async removeOrderItem(id: string) {
    const result = await this.prisma.orderItems.delete({
      where: { id },
    });

    return result;
  }
}
