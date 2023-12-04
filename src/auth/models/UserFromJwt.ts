import { AccountType } from 'src/enums/account_type.enum';

export interface UserFromJwt {
  id: string;
  email: string;
  roles: string[];
  token_type?: string;
  accountType?: AccountType;
}
