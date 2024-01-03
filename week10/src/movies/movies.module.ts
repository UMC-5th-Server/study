import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';

@Module({
    controllers:[MoviesController],
    prividers: [MoviesService],
})
export class MoviesModule {}
