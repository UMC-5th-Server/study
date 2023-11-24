import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({ // 데코레이터는 클래스에 함수 기능 추가 가능
  imports: [],
  controllers: [MoviesController], // url을 가져오고 함수를 실행
  providers: [MoviesService], //
})
export class AppModule {}
