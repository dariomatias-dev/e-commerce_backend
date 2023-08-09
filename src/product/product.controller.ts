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

  @Get('product/:id')
  findOne(@Param() params: UuidParamDto) {
    return this.productService.findOne(params.id);
  }

  @Get('products/amount')
  findCount() {
    return this.productService.findCount();
  }

  @Get('products')
  findAll(@Query() queries: PaginationDto) {
    let take = queries.take;

    if (take === undefined) take = 10;
    return this.productService.findAll(+queries.skip, +take);
  }

  @Get('products-by-category/:id')
  findAllByCategory(
    @Param() params: UuidParamDto,
    @Query() queries: PaginationDto,
  ) {
    let take = queries.take;

    if (take === undefined) take = 10;

    return this.productService.findAllByCategory(
      params.id,
      +queries.skip,
      +take,
    );
  }

  @Get('products-by-category/:id/amount')
  findAllByCategoryAmount(@Param('id') id: string) {
    return this.productService.findAllByCategoryAmount(id);
  }

  @Get('products-by-categories/amount')
  findAllByCategoriesAmount(@Query() queries: FindAllByCategoriesDto) {
    const categoryIdsArray = queries.categoryIds.split(',');

    return this.productService.findAllByCategoriesAmount(
      queries.productId,
      categoryIdsArray,
    );
  }

  @Get('products-by-categories')
  findAllByCategories(
    @Query() queries: FindAllByCategoriesDto & PaginationDto,
  ) {
    const { productId, categoryIds, skip } = queries;
    let take = queries.take;

    if (take === undefined) take = 10;

    const categoryIdsArray = categoryIds.split(',');

    return this.productService.findAllByCategories(
      productId,
      categoryIdsArray,
      +skip,
      +take,
    );
  }

  @Post('product')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Patch('product/:id')
  update(
    @Param() params: UuidParamDto,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.update(params.id, updateProductDto);
  }

  @Delete('product/:id')
  remove(@Param() params: UuidParamDto) {
    return this.productService.remove(params.id);
  }
}
