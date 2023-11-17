import { PartialType } from '@nestjs/mapped-types';
import { CreatePhysicalPersonUserDto } from './create-physical-person-user.dto';

export class UpdatePhysicalPersonUserDto extends PartialType(CreatePhysicalPersonUserDto) {}
