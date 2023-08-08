import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  findAll() {
    return `This action returns all category`;
  }

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
