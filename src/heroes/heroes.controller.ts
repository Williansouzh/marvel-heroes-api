import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './hero.schema';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  async create(@Body() createHeroDto: CreateHeroDto): Promise<Hero> {
    try {
      const hero = await this.heroesService.create(createHeroDto);
      return hero;
    } catch (error) {
      this.handleError(error, 'Failed to create hero');
    }
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    try {
      return await this.heroesService.findAll();
    } catch (error) {
      this.handleError(error, 'Failed to retrieve heroes');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() heroDto: UpdateHeroDto,
  ): Promise<Hero> {
    try {
      return await this.heroesService.update(id, heroDto);
    } catch (error) {
      this.handleError(error, 'Failed to update hero');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Hero> {
    try {
      return await this.heroesService.remove(id);
    } catch (error) {
      this.handleError(error, 'Failed to delete hero');
    }
  }

  private handleError(error: any, message: string) {
    console.error(error);
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
