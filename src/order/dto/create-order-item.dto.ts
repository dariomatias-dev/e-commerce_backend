import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreateOrderItemDto {
  @IsUUID()
  productId: string;

  @Min(1)
  @IsNumber()
  quantity: number;

  @Min(1)
  @IsNumber()
  unitPrice: number;
}
