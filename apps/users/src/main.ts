import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.RMQ,
      options: { 
        urls: ['amqps://lgeszetb:CKJRgZFgToy2bd5JC31liE8gT9uR3F2d@horse.lmq.cloudamqp.com/lgeszetb'],
        queue: 'nest'
       },
    },
  );
  await app.listen();
}
bootstrap();
