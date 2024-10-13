import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './heroes/heroes.module';
import { ErrorMiddleware } from './middlewares/error.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://williansouza4041:mZYtYgvXKGNeRr0L@marvelheroes.ahqgc.mongodb.net/?retryWrites=true&w=majority&appName=marvelheroes',
    ),
    HeroesModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ErrorMiddleware).forRoutes('*');
  }
}
