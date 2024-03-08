// eslint-disable-next-line prettier/prettier
import { IsEmail, IsNotEmpty, IsString, IsOptional, IsArray, IsEnum } from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  @IsEnum(['user', 'admin'])
  role: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  skills: string[];
}
