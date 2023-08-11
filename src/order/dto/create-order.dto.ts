import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

import { OrderItem } from './order-item.dto';

export class CreateOrderDto {
  @IsUUID()
  userId: string;

  @Type(() => OrderItem)
  @ValidateNested()
  @ArrayNotEmpty()
  orderItems: OrderItem[];

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;
}
