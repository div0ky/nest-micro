import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://lgeszetb:CKJRgZFgToy2bd5JC31liE8gT9uR3F2d@horse.lmq.cloudamqp.com/lgeszetb',
          ],
          queue: 'nest',
        },
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
