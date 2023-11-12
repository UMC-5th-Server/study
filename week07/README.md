# 7주차 스터디 : TypeScript 문법 기초 (2)

### 1. Interface

- 인터페이스 선언

```
interface Person {
  name: string;
  age: number;
}
```

- 인터페이스 사용

```
const person: Person = {
  name: "Mark",
  age: 35,
};
```

- Optional Property

```
interface Person {
  name: string;
  age?: number;  // Optional Property
}

const person: Person = {
  name: "Mark"
};
```
