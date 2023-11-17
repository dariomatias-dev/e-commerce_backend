import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

import { PrismaNotFoundExceptionFilter } from './exception-filters/prisma-not-found.exception-filter';
import { UniqueFieldExceptionFilter } from './exception-filters/unique-field.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
    }),
  );

  app.useGlobalFilters(
    new PrismaNotFoundExceptionFilter(),
    new UniqueFieldExceptionFilter(),
  );

  await app.listen(3003);
}
bootstrap();
