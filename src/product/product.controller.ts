import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
  findAll(
    @Query('skip') skip: number,
    @Query('take') take: number | undefined,
  ) {
    if (take === undefined) take = 10;
    return this.productService.findAll(+skip, +take);
  }

  @Get('products-category/:id')
  findAllByCategory(
    @Param('id') id: string,
    @Query('skip') skip: number,
    @Query('take') take: number | undefined,
  ) {
    if (take === undefined) take = 10;

    return this.productService.findAllByCategory(id, +skip, +take);
  }

  @Get('products-category/:id/amount')
  findAllByCategoryAmount(@Param('id') id: string) {
    return this.productService.findAllByCategoryAmount(id);
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
