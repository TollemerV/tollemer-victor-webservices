import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

export interface Project extends Document {
  name: string;
  description: string;
  team: mongoose.Types.ObjectId[]; // Référence aux users
}
