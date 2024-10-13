import { Schema, Document } from 'mongoose';

export interface Hero extends Document {
  name: string;
  abilities: string[];
  origin: string;
}

export const HeroSchema = new Schema<Hero>({
  name: { type: String, required: true },
  abilities: { type: [String], required: true },
  origin: { type: String, required: true },
});
