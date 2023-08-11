import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class CreateCartDto {
  @IsArray()
  @IsUUID('4', { each: true })
  @ArrayNotEmpty()
  productIds: Array<string>;
}
