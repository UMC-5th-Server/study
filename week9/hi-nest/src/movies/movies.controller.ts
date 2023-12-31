import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies') // url
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // 플랫폼이나 어플리케이션에 req, res 같은 decorator를 이용해서 express에 접근할 수 있음.
  // but, 추천 안함. fastify처럼 express와는 다른 방법을 쓰는 방법이 있음.
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `We are searching for a movie made after: ${searchingYear}`;
  //   }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  } // http://localhost:3000/movies/1

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id') // put 전체 업데이트, patch 일부 업데이트
  path(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
