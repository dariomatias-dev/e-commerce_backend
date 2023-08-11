import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
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
  @ArrayNotEmpty()
  orderItems: OrdersItems[];

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;
}
