import { Injectable } from '@nestjs/common';

@Injectable()
export class Test01Service {
  getHello(): string {
    return 'Hello World!';
  }
}
