import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

@Module({ // 데코레이터는 클래스에 함수 기능 추가 가능
  imports: [MoviesModule],
  controllers: [AppController], // url을 가져오고 함수를 실행
  providers: [], //
})
export class AppModule {}
