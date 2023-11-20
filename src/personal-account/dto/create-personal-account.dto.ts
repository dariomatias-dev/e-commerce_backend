import {
  IsDateString,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { AccountDto } from 'src/common/dto/account.dto';

import { IsText } from 'src/decorators/is-text-constraint.decorator';

export class CreatePersonalAccountDto extends AccountDto {
  @MaxLength(24)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  @IsText()
  firstName: string;

  @MaxLength(24)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  @IsText()
  lastName: string;

  @IsDateString()
  dateOfBirth: Date;
}
