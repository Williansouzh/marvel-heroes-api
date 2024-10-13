import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero } from './hero.schema';

@Injectable()
export class HeroesService {
  constructor(@InjectModel('Hero') private heroModel: Model<Hero>) {}

  async create(heroDto: any): Promise<Hero> {
    const createdHero = new this.heroModel(heroDto);
    return createdHero.save();
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

  async update(id: string, heroDto: any): Promise<Hero> {
    return this.heroModel.findByIdAndUpdate(id, heroDto, { new: true });
  }

  async remove(id: string): Promise<Hero> {
    return this.heroModel.findByIdAndDelete(id);
  }
}
