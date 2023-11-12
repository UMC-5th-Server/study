interface Person {
  name: string;
  hello(): void;
  hello1(): string;
}

const person: Person = {
  name: "Mark",
  hello: function () {},
  hello1(): string {
    return "Hello";
  },
};

function hello(p: Person): void {
  console.log(`안녕하세요 ${p.name} 입니다.`);
}
