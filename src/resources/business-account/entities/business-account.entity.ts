import { AccountType } from 'src/enums/account_type.enum';

export class BusinessAccount {
  id: string;
  fantasyName: string;
  corporateName: string;
  cnpj: string;
  stateRegistration: string;
  cpf: string;
  rg: string;
  email: string;
  phone: string;
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
