### TypeScript 문법 기초

- 5강 : TypeScript Basic Types
  \*\* 타입스크립트는 정적 즉, 타입을 부여해야함.
  - 기본 자료형
    - Boolean
    - Number
    - String
    - Null
    - Undefined
    - Symbol
    - Array
  - 추가 타입
    - Any
    - Void
    - Never → 리턴에 주로 사용
    - Enum → 결과값 string
    - Tuple
  - Primitive Type
    - 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
    - 프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분 (객체처럼 인지해서 toString 시키고 끝나고는 다시 프리미티브로 돌아오는 형식)
      ex) let name = ‘mark’; name.toString();
  - literal
    - 값 자체가 변하지 않는 값을 의미
    - 상수와 다른 점 : 상수 → 가리키는 포인터가 고정. 리터럴 → 그 자체가 값이자 그릇
      ex) 35;
  - Boolean / boolean
    - 가장 기본적인 데이터 타입
    - 단순한 true 혹은 false 값.
    - js / tyescript 에서 boolean이라고 부름
    - boolean → primitive type (이거 쓰는 걸 권장.)
    - Boolean → 레퍼 오브젝티브 (일종의 클래스)
  - Number / number
    - number 쓰는 것을 권장
  - String
    - Template String
      - 행에 걸쳐 있거나 표현식을 넣을 수 있는 문자열
      - ${ ex } 이런 식으로 사용
  - undefined & null
    - 각각 undefined와 null이라는 고유한 타입을 가짐.
    - 모든 타입의 서브 타입. 즉, 대입이 가능
      - string이나 number 등에 null이나 undefined를 할당할 수 있음
    - null → typeof를 해보면 object
    - undefined → typeof를 해보면 undefined
  - void
    - 타입이 없는 상태
    - any와 반대
  - any
    - 어떤 타입이어도 상관없는 타입
    - 최대한 쓰지 않아야함.
    - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
  - Array
    - Array<타입>
    - 타입[]
  - tuple
    - 배열인데 타입이 한 가지가 아닌 경우
- 6강 : var, let, const
  - var
    - es5
    - 변수의 유효 범위 : 함수 스코프
    - 호이스팅 o
    - 재선언 가능
  - let, const
    - es6
    - 변수의 유효 범위 : 블록 스코프
    - 호이스팅 x
    - 재선언 불가
  - 호이스팅 → 변수를 아래서 선언했는데 사용이 위에서 가능.
- 7강 : Type assertions, Type alias
  - Type assertions
    - 형 변환과 다름. → 아예 형 변환시킴
    - 타입이 이것이다 라고 컴파일러에게 알려주는 것을 의미
    - 변수 as 강제할 타입
    - <강제할타입> 변수
      ex) let strLength: number = (<string>someValue).length;
  - Type alias (타입 별칭)
    - 인터페이스랑 비슷
    - primitive, union type, tuple
    - 기타 직접 작성해야하는 타입을 다른 이름으로 지정할 수 있음
    - 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아님.
      - union type
        - ex) let b: string | number;
          b = ‘스트링’;
          b = 0;
          → 이걸 type StringOrNumber = string | number로 만들면, 앞으로 StringOrNumber로 타입을 쓰면 됨.
      - tuple
        - ex) type PersonTuple = [string, number];
          let another: PersonTuple = [’Anna’, 24];
    - interface와 차이점
      - type alias가 상속될 순 없음
