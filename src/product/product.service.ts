import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  findAll() {
    return `This action returns all product`;
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
