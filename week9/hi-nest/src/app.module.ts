import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MoviesService } from './movies/movies.service';

// service -> 실질적으로 비즈니스 로직 수행하는 곳. 필요하다면 데이터베이스에 연락.

// 데코레이터 -> 클래스에 함수 기능을 추가할 수 있음. 클래스 위의 함수, 클래스를 위해 움직임.
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
