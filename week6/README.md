# TypeScript Basic Type
Primitive Type
- 실제 값을 저장하는 자료형 (오브젝트와 레퍼런스 형태X)

Template String
- `this is ${변수명}`

Undefined & Null

void
- any와 반대
- 함수의 반환값이 없을 때

any
- 어떤 타입이어도 상관X
- 사용하지 않는 것이 핵심!


Tuple
- 배열인데 타입이 여러 가지
- 객체. 꺼내서 사용할 때, 주의 필요

Enum
- enum 이름명 {키=값, 키, 키}

Symbol
- Primitive Type의 값을 담아서 사용
- 고유, 수정 불가능 값으로 만들어 줌

---------------------------------------------
# var, let, const
var 
- 함수 범위
- 호이스팅 가능 (선언 위치에 관계없이 사용 가능)
- 재선언 가능

let, const
- 블록 범위
- 호이스팅 불가능
- 재선언 불가능

let, const의 타입 추론
- const는 명시적으로 타입 지정하지 않으면, 리터럴로 추정 

----------------------------------------------
# Type assertions, Type alias
Type assertions
- 형변환X
- 컴파일러에게 타입을 알려주는 것
변수 as 타입
<타입>변수

Type alias
- 타입을 변수에..! (별명)
- union, tuple 등에서 타입 선언시 편리
type 변수명 = 타입

union Type
- 여러 타입
- any를 몇 개의 타입으로 제한
- 타입1 | 타입2 | 타입3




