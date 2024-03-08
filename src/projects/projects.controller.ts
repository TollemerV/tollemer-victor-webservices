// eslint-disable-next-line prettier/prettier
import {Body, Controller, Delete, Get, Param, Post,Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './projects.schema';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() projectData: Project): Promise<Project> {
    return this.projectsService.create(projectData);
  }

  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Project> {
    return this.projectsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() projectData: Project,
  ): Promise<Project> {
    return this.projectsService.update(id, projectData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.projectsService.delete(id);
  }
}
