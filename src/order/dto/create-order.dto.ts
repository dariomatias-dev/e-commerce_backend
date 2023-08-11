import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';

class OrdersItems {
  @IsUUID()
  productId: string;

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  unitPrice: number;
}

export class CreateOrderDto {
  @IsUUID()
  userId: string;

  @Type(() => OrdersItems)
  @ValidateNested()
  @IsNotEmpty()
  orderItems: OrdersItems;

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;
}
