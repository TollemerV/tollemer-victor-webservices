// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skill } from './skills.schema';
import { CreateSkillDto } from './dto/create-skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  async create(@Body() createSkillDto: CreateSkillDto): Promise<Skill> {
    return this.skillsService.create(createSkillDto);
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
    @Body() updateSkillDto: CreateSkillDto,
  ): Promise<Skill> {
    return this.skillsService.update(id, updateSkillDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.skillsService.delete(id);
  }
}
