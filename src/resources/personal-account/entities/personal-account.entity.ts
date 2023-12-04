import { AccountType } from 'src/enums/account_type.enum';

export class PersonalAccount {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone: string;
  cpf: string;
  rg: string;
  email: string;
  state: string;
  city: string;
  address: string;
  cep: string;
  password: string;
  roles: string[];
  termsOfUse: boolean;
  receiveMessages: boolean;
  accountType?: AccountType;
}
