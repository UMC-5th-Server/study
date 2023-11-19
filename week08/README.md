# 8주차 스터디 : TypeScript 문법 기초 (3)

### 1. Iterator

- for...of

```
- es3
for(var i=0; i<array.length; i++)

- es5
array.forEach (return으로 순회 탈출 가능)

- es6
for(const item of array)
```

- for...in

  - 루프가 무작위로 순회 가능
  - for...of를 더 자주 사용

- Symbol.iterator

  - 프로퍼티이며 함수가 구현되어있으면, iterable이라고 함
  - Array, Map, Set, String, Int32Array, Uint32Array,에 내장된 구현체가 있어서 iterable함
  - 그냥 객체는 iterable X
  - Symbol.iterator 함수를 구현하면 어떤 객체에서도 for...of 사용 가능

<br>

### 2. Decorator

- Decorator 종류
  - Class Decorator
  - Method Decorator
  - Property Decorator
  - Parameter Decorator

<br>

### 3. Type Inference

- 타입 추론
  - 타입을 명시적으로 쓰지 않을 때 추론하는 방법에 대한 규칙
  - let은 기본 자료형으로 추론
  - const는 리터럴 타입으로 추론
