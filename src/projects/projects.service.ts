import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Project } from './projects.schema';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('Project') private projectModel: Model<Project>) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const newProject = new this.projectModel({
      ...createProjectDto,
      team: createProjectDto.team.map((id) => new mongoose.Types.ObjectId(id)),
    });
    return newProject.save();
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async findOne(id: string): Promise<Project> {
    return this.projectModel.findById(id).exec();
  }

  async update(
    id: string,
    updateProjectDto: CreateProjectDto,
  ): Promise<Project> {
    const project = await this.projectModel.findById(id);
    if (!project) {
      throw new Error('Project not found');
    }
    project.set({
      ...updateProjectDto,
      team: updateProjectDto.team.map((id) => new mongoose.Types.ObjectId(id)),
    });
    return project.save();
  }

  async delete(id: string): Promise<any> {
    return this.projectModel.findOneAndDelete({ _id: id }).exec();
  }
}
