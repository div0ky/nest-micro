import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS') private users_client: ClientProxy) {}

    findAll() {
        return this.users_client.send('users.findAll', {});
    }
}
