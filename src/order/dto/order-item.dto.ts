import { Optional } from '@nestjs/common';
import { IsNumber, IsUUID, Min } from 'class-validator';

export class OrderItem {
  @Optional()
  @IsUUID()
  productId: string;

  @Optional()
  @Min(1)
  @IsNumber()
  quantity: number;

  @Optional()
  @Min(1)
  @IsNumber()
  unitPrice: number;
}
