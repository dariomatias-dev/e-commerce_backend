import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { FastifyReply } from 'fastify';

@Catch(PrismaClientKnownRequestError)
export class UniqueFieldExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<FastifyReply>();

    const fieldName = exception.meta?.target;

    const messageError = fieldName
      ? `The value for the field ${fieldName} is already in use.`
      : exception.message;

    exception.code === 'P2002'
      ? response.status(409).send({
          statusCode: 409,
          messageError,
        })
      : response.status(409).send({
          statusCode: 409,
          messageError,
        });
  }
}
