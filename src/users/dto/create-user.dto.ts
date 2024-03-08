// eslint-disable-next-line prettier/prettier
import { IsEmail, IsNotEmpty, IsString, IsOptional, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  skills: string[];
}
