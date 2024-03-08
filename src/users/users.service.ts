import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(userData: any): Promise<User> {
    if (userData.skills && Array.isArray(userData.skills)) {
      userData.skills = userData.skills.map(
        (skillId) => new mongoose.Types.ObjectId(skillId),
      );
    }
    const newUser = new this.userModel(userData);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('skills').exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).populate('skills').exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }
}
