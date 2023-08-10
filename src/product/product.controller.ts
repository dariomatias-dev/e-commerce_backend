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
import { FindAllByCategoriesDto } from './dto/find-all-by-categories.dto';
import { PaginationDto } from './dto/pagination.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { UuidParamDto } from 'src/common/dto/uuid-param.dto';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('product')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get('product/:id')
  findOne(@Param() { id }: UuidParamDto) {
    return this.productService.findOne(id);
  }

  @Get('products-by-ids')
  findByIds(
    @Query('productIds') productIds: string,
    @Query('skip') skip: number | undefined,
    @Query('take') take: number | undefined,
  ) {
    if (skip !== undefined) {
      skip = +skip;

      if (take === undefined) take = 10;
      else if (typeof take === 'string') take = +take;
    }

    let selectedProductIds: Array<string> = [];
    if (productIds) {
      selectedProductIds = productIds.split(',');
    }

    return this.productService.findByIds(selectedProductIds, skip, take);
  }

  @Get('products-by-category/:id')
  findAllByCategory(
    @Param() { id }: UuidParamDto,
    @Query() { skip, take }: PaginationDto,
  ) {
    if (take === undefined) take = 10;

    return this.productService.findAllByCategory(id, +skip, +take);
  }

  @Get('products-by-category/:id/amount')
  findAllByCategoryAmount(@Param() { id }: UuidParamDto) {
    return this.productService.findAllByCategoryAmount(id);
  }

  @Get('products-by-categories/amount')
  findAllByCategoriesAmount(
    @Query() { productId, categoryIds }: FindAllByCategoriesDto,
  ) {
    const categoryIdsArray = categoryIds.split(',');

    return this.productService.findAllByCategoriesAmount(
      productId,
      categoryIdsArray,
    );
  }

  @Get('products-by-categories')
  findAllByCategories(
    @Query()
    {
      productId,
      categoryIds,
      skip,
      take,
    }: FindAllByCategoriesDto & PaginationDto,
  ) {
    if (take === undefined) take = 10;

    const categoryIdsArray = categoryIds.split(',');

    return this.productService.findAllByCategories(
      productId,
      categoryIdsArray,
      +skip,
      +take,
    );
  }

  @Get('products/amount')
  findCount() {
    return this.productService.findCount();
  }

  @Get('products')
  findAll(@Query() { skip, take }: PaginationDto) {
    if (take === undefined) take = 10;
    return this.productService.findAll(+skip, +take);
  }

  @Patch('product/:id')
  update(
    @Param() { id }: UuidParamDto,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete('product/:id')
  remove(@Param() { id }: UuidParamDto) {
    return this.productService.remove(id);
  }
}
