import { IsArray, IsUUID } from 'class-validator';

export class CreateWishlistDto {
  @IsArray()
  @IsUUID('4', { each: true })
  productIds: Array<string>;
}
