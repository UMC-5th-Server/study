import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule = 루트 모듈
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // 오류 메시지 띄움
      transform: true, // request를 우리가 원하는 타입으로 변경해줌
    }),
  );
  await app.listen(3000);
}
bootstrap();
