1. iterator

es6
- for (const item of array) : 배열에서만 사용이 가능
- for..in : 배열을 순회할 때는 사용하지 않을 것

Symbol.iterator
- 프로퍼티이며, 함수가 구현되어 있으며, iterable 이라고 함
- Array, Map, Set, String, Int32Array, Uint32Array, etc에는 내장된 구현체가 있으므로 이터러블함
- 그냥 객체는 이터러블 하지 않음
- 이터레이터를 통해 이터러블한 객체의 Symbol.iterator 함수를 호출

2. Decorator

종류
- class decorator
- method decorator
- property decorator
- parameter decorator

3. Type Inference

- 기본적으로 타입을 명시적으로 쓰지 않을 때 추론하는 방법에 대한 규칙
- let은 기본적으로 우리가 아는 기본 자료형으로 추론
- const는 리터럴 타입으로 추론
- 오브젝트 타입을 쓰지 않으면 프로퍼티는 let처럼 추론
- array, 함수의 리턴에서는 원하는 것으로 얻기 힘듦