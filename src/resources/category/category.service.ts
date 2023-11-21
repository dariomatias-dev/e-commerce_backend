import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { categorySelection } from './selections/category.selection';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = await this.prisma.categories.create({
      select: categorySelection,
      data: createCategoryDto,
    });

    return category;
  }

  async findOne(id: string) {
    const category = await this.prisma.categories.findUnique({
      where: { id },
      select: categorySelection,
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  async findAll() {
    const categories = await this.prisma.categories.findMany({
      select: categorySelection,
    });

    return categories;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.prisma.categories.update({
      where: { id },
      select: categorySelection,
      data: updateCategoryDto,
    });

    return category;
  }

  async remove(id: string) {
    const category = await this.prisma.categories.delete({
      where: { id },
      select: categorySelection,
    });

    return category;
  }
}
