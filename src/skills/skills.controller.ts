// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skill } from './skills.schema';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  async create(@Body() skillData: Skill): Promise<Skill> {
    return this.skillsService.create(skillData);
  }

  @Get()
  async findAll(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Skill> {
    return this.skillsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() skillData: Skill,
  ): Promise<Skill> {
    return this.skillsService.update(id, skillData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.skillsService.delete(id);
  }
}
