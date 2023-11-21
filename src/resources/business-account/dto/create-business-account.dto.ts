import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { AccountDto } from 'src/common/dto/account.dto';

import { IsText } from 'src/decorators/is-text-constraint.decorator';

export class CreateBusinessAccountDto extends AccountDto {
  @MaxLength(64)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  @IsText()
  fantasyName: string;

  @MaxLength(64)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  @IsText()
  corporateName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, {
    message: 'Invalid CNPJ',
  })
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3}\.\d{3}\.\d{3}\.\d{3}$/, {
    message: 'Invalid state registration',
  })
  stateRegistration: string;
}
