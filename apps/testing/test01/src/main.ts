import { NestFactory } from '@nestjs/core';
import { Test01Module } from './test01.module';

async function bootstrap() {
  const app = await NestFactory.create(Test01Module);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
