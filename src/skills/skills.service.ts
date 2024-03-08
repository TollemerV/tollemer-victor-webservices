import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './skills.schema';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<Skill>) {}

  async create(skill: Skill): Promise<Skill> {
    const newSkill = new this.skillModel(skill);
    return newSkill.save();
  }

  async findAll(): Promise<Skill[]> {
    return this.skillModel.find().exec();
  }

  async findOne(id: string): Promise<Skill> {
    return this.skillModel.findById(id).exec();
  }

  async update(id: string, skill: Skill): Promise<Skill> {
    return this.skillModel.findByIdAndUpdate(id, skill, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.skillModel.findOneAndDelete({ _id: id }).exec();
  }
}
