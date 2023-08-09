import { Injectable } from '@nestjs/common';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { productSelectionUtil } from 'src/common/utils/productDataSelection.util';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(id: string) {
    const product = await this.prisma.products.findUnique({
      where: { id },
    });

    return product;
  }

  async findCount() {
    const amount = await this.prisma.products.count();

    return amount;
  }

  async findAll(skip: number, take: number) {
    const products = await this.prisma.products.findMany({
      skip,
      take,
    });

    return { products, skip: skip + take };
  }

  async findAllByCategory(id: string, skip: number, take: number) {
    const products = await this.prisma.products.findMany({
      take,
      skip,
      select: productSelectionUtil,
      where: {
        categoryIds: {
          hasSome: [id],
        },
      },
    });

    return { products, skip: skip + take };
  }

  async findAllByCategoryAmount(id: string) {
    const amount = await this.prisma.products.count({
      where: {
        categoryIds: {
          hasSome: [id],
        },
      },
    });

    return amount;
  }

  async findAllByCategoriesAmount(productId: string, categoryIds: string[]) {
    const amount = await this.prisma.products.count({
      where: {
        AND: [
          {
            categoryIds: {
              hasSome: categoryIds,
            },
          },
          {
            NOT: {
              id: productId,
            },
          },
        ],
      },
    });

    return amount;
  }

  async findAllByCategories(
    productId: string,
    categoryIds: string[],
    skip: number,
    take: number,
  ) {
    const products = await this.prisma.products.findMany({
      take,
      skip,
      select: productSelectionUtil,
      where: {
        AND: [
          {
            categoryIds: {
              hasSome: categoryIds,
            },
          },
          {
            NOT: {
              id: productId,
            },
          },
        ],
      },
    });

    return { products, skip: skip + take };
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
