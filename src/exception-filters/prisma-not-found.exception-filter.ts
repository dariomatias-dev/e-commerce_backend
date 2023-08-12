import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<FastifyReply>();

    const messageError = exception?.meta.cause ?? exception.message;

    exception.code === 'P2025'
      ? response.status(404).send({
          statusCode: 404,
          message: messageError,
        })
      : response.status(500).send({
          statusCode: 500,
          message: messageError,
        });
  }
}
