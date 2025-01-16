import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, first_name: 'John', last_name: 'Doe', age: 25 },
    { id: 2, first_name: 'Jane', last_name: 'Smith', age: 30 },
    { id: 3, first_name: 'Michael', last_name: 'Johnson', age: 35 },
    { id: 4, first_name: 'Emily', last_name: 'Brown', age: 28 },
    { id: 5, first_name: 'David', last_name: 'Wilson', age: 42 },
    { id: 6, first_name: 'Sarah', last_name: 'Taylor', age: 33 },
    { id: 7, first_name: 'Robert', last_name: 'Anderson', age: 39 },
    { id: 8, first_name: 'Lisa', last_name: 'Martinez', age: 31 },
    { id: 9, first_name: 'William', last_name: 'Thomas', age: 45 },
    { id: 10, first_name: 'Jennifer', last_name: 'Garcia', age: 37 }
  ]

  findAll() {
    return this.users;
  }
}
