import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// service -> 실질적으로 비즈니스 로직 수행하는 곳. 필요하다면 데이터베이스에 연락.

// 데코레이터 -> 클래스에 함수 기능을 추가할 수 있음. 클래스 위의 함수, 클래스를 위해 움직임.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

// app module은 app controller와 service를 가지고 있어야함. 그래서 movie 관련된건 movie module로
// nestjs에서 앱은 여러 개의 모듈로 구성되어있음.
