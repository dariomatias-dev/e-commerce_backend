import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { FastifyReply } from 'fastify';

@Catch(PrismaClientKnownRequestError)
export class PrismaNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<FastifyReply>();

    const messageError = exception?.meta.cause ?? exception.message;

    exception.code === 'P2025'
      ? response.status(404).send({
          statusCode: 404,
          messageError,
        })
      : response.status(500).send({
          statusCode: 500,
          messageError,
        });
  }
}
