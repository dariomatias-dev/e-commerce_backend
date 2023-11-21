import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
  @IsUUID()
  userId: string;

  @Type(() => CreateOrderItemDto)
  @ValidateNested()
  @ArrayNotEmpty()
  orderItems: CreateOrderItemDto[];

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;
}
