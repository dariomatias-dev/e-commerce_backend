import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { CreateOrderDto } from './create-order.dto';
import { OrderItem } from './order-item.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsOptional()
  @Type(() => OrderItem)
  orderItem: OrderItem;
}
