import { FastifyRequest } from 'fastify';

import { UserFromJwt } from './UserFromJwt';

export interface AuthRequest extends FastifyRequest {
  user: UserFromJwt;
}
