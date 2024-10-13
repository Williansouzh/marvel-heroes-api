import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './hero.schema';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  create(@Body() heroDto: any): Promise<Hero> {
    return this.heroesService.create(heroDto);
  }

  @Get()
  findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() heroDto: any): Promise<Hero> {
    return this.heroesService.update(id, heroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Hero> {
    return this.heroesService.remove(id);
  }
}
