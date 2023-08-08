import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const product = await this.prisma.products.findUnique({
      where: { id },
    });

    return product;
  }

  async findAll() {
    const products = await this.prisma.products.findMany();

    return products;
  }

  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.products.create({
      data: createProductDto,
    });

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.products.update({
      where: { id },
      data: updateProductDto,
    });

    return product;
  }

  async remove(id: string) {
    const product = await this.prisma.products.delete({
      where: { id },
    });

    return product;
  }
}
