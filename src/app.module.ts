import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://williansouza4041:mZYtYgvXKGNeRr0L@marvelheroes.ahqgc.mongodb.net/?retryWrites=true&w=majority&appName=marvelheroes',
    ),
    HeroesModule,
  ],
})
export class AppModule {}
