import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class CreateWishlistDto {
  @IsArray()
  @IsUUID('4', { each: true })
  @ArrayNotEmpty()
  productIds: Array<string>;
}
