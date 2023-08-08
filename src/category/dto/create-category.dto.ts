import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @MaxLength(30)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  name: string;
}
