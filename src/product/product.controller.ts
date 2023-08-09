import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('product/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Get('products/amount')
  findCount() {
    return this.productService.findCount();
  }

  @Get('products')
  findAll() {
    return this.productService.findAll();
  }

  @Post('product')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Patch('product/:id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete('product/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
