import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { HeroSchema } from './hero.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Hero', schema: HeroSchema }])],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
