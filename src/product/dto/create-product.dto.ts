import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(30)
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(2000)
  @MinLength(20)
  @IsString()
  @IsNotEmpty()
  description: string;

  @Max(8)
  @Min(1)
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  amountOfImages: number;

  @Max(100000)
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ArrayMaxSize(10)
  @ArrayMinSize(1)
  @IsArray()
  @IsNotEmpty()
  categoryIds: Array<string>;
}
