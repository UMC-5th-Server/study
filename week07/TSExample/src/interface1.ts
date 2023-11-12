// indexable type

interface I1_Person {
  name: string;
  [index: string]: string; // property.string 타입이면 다 string으로 표현 가능
}

const i1_p: I1_Person = {
  name: "Mark",
};

i1_p.anybody = "anna";

function helloInterface(p: I1_Person): void {
  console.log(`안녕하세요 ${p.name} 입니다.`);
}

// Array
interface Person2 {
  [index: number]: string;
}

const p2: Person2 = {};
p2[0] = "hi";
