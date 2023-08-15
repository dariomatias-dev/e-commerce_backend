import { IsArray, IsUUID } from 'class-validator';

export class CreateCartDto {
  @IsArray()
  @IsUUID('4', { each: true })
  productIds: Array<string>;
}
