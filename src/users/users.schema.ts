import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  skills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
    },
  ],
});

export interface User extends Document {
  firstName: string;
  lastName: string;
  email: string;
  skills: mongoose.Types.ObjectId[]; // Référencs aux skills
}
