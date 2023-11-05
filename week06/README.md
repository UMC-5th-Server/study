# 6주차 스터디 : TypeScript 문법 기초 (1)

### 1. TypeScript 개발 환경 셋팅

1. TypeScript 설치

- Node가 이미 설치되어 있다면
- npm install -g typescript 명령어를 통해 전역적으로 설치

2. 개발환경 셋팅

```
> tsc --init (tsconfig.json 생성)
> mkdir src (소스 폴더 경로 생성)
> mkdir build (빌드 폴더 경로 생성)
```

- tsconfig.json : TypeScript 설정파일

```
> rootDir과 outDir의 주석 해제
> "rootDir": "./src"  "outDir": "./build" 를 입력해주고 저장
> src폴더에서 소스를(.ts) 찾아 bulid 폴더에 컴파일된 소스(.js)를 생성
```

만약 위의 명령어를 입력했는데 아래와 같은 오류가 발생한다면

```
+ CategoryInfo          : 보안 오류: (:) [], PSSecurityException
+ FullyQualifiedErrorId : UnauthorizedAccess
```

터미널에서 실행정책을 확인한다.

```
> Get-ExecutionPolicy
```

만약 Restricted로 되어있다면 아래와 같이 변경해준다. (관리자 모드로 접속해야 변경 가능)

```
> Set-ExecutionPolicy Bypass
```

3. tsc 컴파일 자동적용 및 실행 스크립트 적용

```
> npm init
> npm install nodemon concurrently

(nodemon : 스크립트 모니터링 도구, 소스가 변경되었을 때 변경된 소스를 반영하여 서버 재시작)
(concurrently : 병행 실행을 할 수 있도록 도와주는 도구, 빌드와 실행을 병행하기위해 사용)
```

- package.json 수정 : script 안에 다음과 같은 내용을 추가
  - "start:build": "tsc -w" (컴파일 과정을 확인하는 명령어 -w : watch)
  - "start:run": "nodemon build/index.js" ( nodemon을 이용해 build/index.js를 실행함 )
  - "start": "concurrently npm:start:_" ( concurrently를 이용해 npm:start:_ build와 run을 모두 실행 )

```
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:*"
```

### 2. TypeScript Basic Types

- JavaScript 기본 자료형을 포함
- ECMAScript 표준에 따른 기본 자료형은 6가지

  - Boolean
  - Number
  - String
  - Null
  - Undefined
  - Symbol
  - Array

- 프로그래밍을 돕는 타입 추가 제공
  - Any
  - Void
  - Never
  - Enum
  - Tuple (Object형)

### 3. var, let, const

- var

  - ES5
  - 변수의 유효 범위: 함수 scope
  - 호이스팅 가능: 변수 냅다 쓰다가 선언은 밑에
  - 재선언 가능

- let, const
  - ES6
  - 변수의 유효 범위: 블록 scope
  - 호이스팅 불가
  - 재선언 불가

### 4. TypeAssertion

- 형변환과는 다름 (형변환은 실제 데이터 구조를 변경)
- 타입이 이것임을 컴파일러에게 알려주는 것을 의미
- 2가지 방법
  - 변수 as 타입
  - <타입> 변수
