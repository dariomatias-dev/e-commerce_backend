import { IsNotEmpty, IsOptional } from 'class-validator';

export class PaginationDto {
  @IsNotEmpty()
  skip: number;

  @IsOptional()
  take?: number;
}
