import { FastifyRequest } from 'fastify';

import { PersonalAccount } from 'src/resources/personal-account/entities/personal-account.entity';

export interface AuthRequest extends FastifyRequest {
  user: PersonalAccount;
}
