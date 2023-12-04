import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AccountDto {
  @Matches(/^\+\d{2} \d{2} \d{5}-\d{4}$/, {
    message: 'Invalid phone number',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
    message: 'Invalid CPF',
  })
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  rg: string;

  @IsEmail()
  email: string;

  @MaxLength(100)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  state: string;

  @MaxLength(100)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  city: string;

  @MaxLength(255)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{5}-\d{3}$/, {
    message: 'Invalid CEP',
  })
  cep: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Invalid password',
  })
  password: string;

  @IsBoolean()
  termsOfUse: boolean;

  @IsBoolean()
  receiveMessages: boolean;
}
