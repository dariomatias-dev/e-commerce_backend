import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalAccountDto } from './create-personal-account.dto';

export class UpdatePersonalAccountDto extends PartialType(
  CreatePersonalAccountDto,
) {}
