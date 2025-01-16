import { Module } from '@nestjs/common';
import { Test01Controller } from './test01.controller';
import { Test01Service } from './test01.service';

@Module({
  imports: [],
  controllers: [Test01Controller],
  providers: [Test01Service],
})
export class Test01Module {}
