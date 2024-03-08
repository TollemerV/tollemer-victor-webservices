/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from './users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('skills').exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).populate('skills').exec();
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findById(id);
    if (!existingUser) {
      throw new Error('User not found');
    }
    existingUser.set(updateUserDto);
    return existingUser.save();
  }
  async delete(id: string): Promise<any> {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
