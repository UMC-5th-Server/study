# 9주차 스터디 : Nest.js API 실습 (1)

### 1. Project setup

```
$ npm i -g @nestjs/cli
$ nest // 설치 여부 확인
$ nest new // nest 프로젝트 생성
$ cd 생성한 프로젝트 이름
$ npm run start // 실행 명령어
```

### 2. Generate

- generate controller

```
$ nest g co
```

- generate service

```
$ nest g s
```

### 3. Validate

- 전역적 유효성 검사를 위해 설치

```
$ npm i class-validator class-transformer
```

- main.ts 에 다음과 같은 내용 추가

```
import { ValidationPipe } from '@nestjs/common';
app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
```
