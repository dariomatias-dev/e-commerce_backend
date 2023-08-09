import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class FindAllByCategoriesDto {
  @IsUUID()
  productId: string;

  @MinLength(35)
  @IsString()
  @IsNotEmpty()
  categoryIds: string;
}
