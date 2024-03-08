import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './projects.schema';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Project') private projectModel: Model<Project>) {}

  async create(project: Project): Promise<Project> {
    const newProject = new this.projectModel(project);
    return newProject.save();
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findById(id).exec();
  }

  async update(id: string, project: Project): Promise<Project> {
    return this.projectModel
      .findByIdAndUpdate(id, project, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.projectModel.findOneAndDelete({ _id: id }).exec();
  }
}
