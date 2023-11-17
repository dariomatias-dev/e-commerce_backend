import { FastifyRequest } from 'fastify';

import { User } from 'src/user/entities/user.entity';

export interface AuthRequest extends FastifyRequest {
  user: User;
}
