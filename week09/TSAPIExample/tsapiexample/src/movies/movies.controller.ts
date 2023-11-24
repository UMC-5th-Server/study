import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entity/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.movieService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.movieService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData) {
    return this.movieService.update(id, updateData);
  }
}
