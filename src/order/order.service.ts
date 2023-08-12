import { Injectable } from '@nestjs/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

import { PrismaService } from 'src/prisma/prisma.service';

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
}
