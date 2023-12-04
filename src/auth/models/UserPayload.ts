export interface UserPayload {
  sub: string;
  email: string;
  roles: string[];
  token_type: string;
  iat?: number;
  exp?: number;
}
