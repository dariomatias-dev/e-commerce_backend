import { FastifyRequest } from 'fastify';

import { PhysicalPersonUser } from 'src/physical-person-user/entities/physical-person-user.entity';

export interface AuthRequest extends FastifyRequest {
  user: PhysicalPersonUser;
}
