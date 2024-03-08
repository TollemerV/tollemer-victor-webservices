import { IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  team: string[];
}
