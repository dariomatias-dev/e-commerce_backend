import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return createOrderDto;
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

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
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
