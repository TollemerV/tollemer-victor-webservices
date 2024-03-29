import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from './skills.schema';
import { CreateSkillDto } from './dto/create-skill.dto';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skillModel: Model<Skill>) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const newSkill = new this.skillModel(createSkillDto);
    return newSkill.save();
  }

  async findAll(): Promise<Skill[]> {
    return this.skillModel.find().exec();
  }

  async findOne(id: string): Promise<Skill> {
    return this.skillModel.findById(id).exec();
  }

  async update(id: string, updateSkillDto: CreateSkillDto): Promise<Skill> {
    const skill = await this.skillModel.findById(id);
    if (!skill) {
      throw new Error('Skill not found');
    }
    skill.set(updateSkillDto);
    return skill.save();
  }

  async delete(id: string): Promise<any> {
    return this.skillModel.findOneAndDelete({ _id: id }).exec();
  }
}
