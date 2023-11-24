import { Module } from '@nestjs/common';
import { Controller } from './.controller';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [Controller, MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
