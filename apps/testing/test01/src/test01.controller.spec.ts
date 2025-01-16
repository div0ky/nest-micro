import { Test, TestingModule } from '@nestjs/testing';
import { Test01Controller } from './test01.controller';
import { Test01Service } from './test01.service';

describe('Test01Controller', () => {
  let test01Controller: Test01Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Test01Controller],
      providers: [Test01Service],
    }).compile();

    test01Controller = app.get<Test01Controller>(Test01Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(test01Controller.getHello()).toBe('Hello World!');
    });
  });
});
