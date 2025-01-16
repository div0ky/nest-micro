import { Controller, Get } from '@nestjs/common';
import { Test01Service } from './test01.service';

@Controller()
export class Test01Controller {
  constructor(private readonly test01Service: Test01Service) {}

  @Get()
  getHello(): string {
    return this.test01Service.getHello();
  }
}
