import { Injectable } from '@nestjs/common';
import { Movie } from './entity/movie.entity';
import { NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies.filter((movie) => movie.id !== id); // +id로 쓰면 string -> number로 바꿔줌
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
}
