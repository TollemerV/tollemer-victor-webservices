import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Skill extends Document {
  //Gestion pour essayer de ne pas avoir ce cas : “angularJs, angular, AnguLar”
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  name: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
