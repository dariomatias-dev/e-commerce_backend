import { Injectable } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.categories.create({
      data: createCategoryDto,
    });

    return category;
  }

  async findOne(id: string) {
    const category = await this.prisma.categories.findUnique({
      where: { id },
    });

    return category;
  }

  async findAll() {
    const categories = await this.prisma.categories.findMany();

    return categories;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.prisma.categories.update({
      where: { id },
      data: updateCategoryDto,
    });

    return category;
  }

  async remove(id: string) {
    const category = await this.prisma.categories.delete({
      where: { id },
    });

    return category;
  }
}
