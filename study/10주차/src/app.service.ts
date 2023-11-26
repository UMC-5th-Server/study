import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // movies.service.ts
  getOne(id: string): Movie {
    const movie = this.movies.find(movie => movie.id === +id); //+는 parseInt와 같음
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found.`);
    }
    return movie;
  }
}
