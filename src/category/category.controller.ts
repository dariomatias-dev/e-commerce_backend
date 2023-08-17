import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryService } from './category.service';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { UuidParamDto } from '../common/dto/uuid-param.dto';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('category')
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get('category/:id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.categoryService.findOne(id);
  }

  @Get('categories')
  findAll() {
    return this.categoryService.findAll();
  }

  @Patch('category/:id')
  update(
    @Param() { id }: UuidParamDto,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete('category/:id')
  remove(@Param() { id }: UuidParamDto) {
    return this.categoryService.remove(id);
  }
}
