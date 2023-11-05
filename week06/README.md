# 6주차 스터디 : TypeScript 문법 기초 (1)

### 1. TypeScript 개발 환경 셋팅

1. TypeScript 설치

- Node가 이미 설치되어 있다면
  > npm install -g typescript 명령어를 통해 전역적으로 설치

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

> Get-ExecutionPolicy

```

만약 Restricted로 되어있다면 아래와 같이 변경해준다. (관리자 모드로 접속해야 변경 가능)
```

> Set-ExecutionPolicy Bypass

```

```
