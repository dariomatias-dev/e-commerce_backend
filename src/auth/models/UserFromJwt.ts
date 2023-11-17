export interface UserFromJwt {
  id: string;
  email: string;
  roles: string[];
  token_type?: string;
}
