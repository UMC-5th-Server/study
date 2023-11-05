TypeScript의 기본 자료형

Primitive Type : 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
Literal : 값 자체가 변하지 않는 값 (상수와 차이가 있음)

1. ECMAScript 표준에 따른 기본 자료형
- Boolean(boolean) : 가장 기본적인 데이터 타입 (true or false)
- Number(number) : 부동 소수점 값
- String(string)
- Null : null이라는 고유의 값을 가짐 (무언가가 있는데 사용할 준비가 덜 된 상태)
- Undefined : undefined라는 고유의 값을 가짐 (무언가가 아예 준비가 안 된 상태)
- Symbol
- Array(object형)

2. 프로그래밍을 도울 몇 가지 타입 (함수 리턴에 주로 사용)
- any : 어떤 타입이어도 상관없는 타입 (컴파일 타임에 타입 체크가 정상적으로 이루어지지 않아 사용 X 권장)
- void : 타입이 없는 상태 (함수의 리턴이 없을 경우에 사용)
- Never : 리턴에 주로 사용
- Enum
- Tuple(object형) : 배열인데 타입이 한 가지가 아닌 경우



var, let, const

1. var
- ES5
- 변수의 유효 범위 : 함수 스코프
- 호이스팅 O
- 재선언 가능

2. let, const
- ES6
- 변수의 유효 범위 : 블록 스코프
- 호이스팅 X
- 재선언 불가



Type assertions, Type alias

1. Type assertions : '타입이 이것이다' 라고 컴파일러에게 알려주는 것
- 형변환과 차이 (형변환은 실제 데이터 구조를 바꿈)
- 변수 as 강제할 타입 / <강제할 타입> 변수

2. Type alias
- 직접 작성해야 하는 타입을 다른 이름으로 지정할 수 있음
- 만들어진 타입의 refer로 사용하는 것이고 타입을 만드는 것은 아님