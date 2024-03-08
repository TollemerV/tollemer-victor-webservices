// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() userData: User): Promise<User> {
    return this.usersService.create(userData);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userData: User): Promise<User> {
    return this.usersService.update(id, userData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.usersService.delete(id);
  }
}
