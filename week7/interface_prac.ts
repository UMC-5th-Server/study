// const person: { name: string; age: number } = {
// 	name: 'Mark',
// 	age: 35
// };

// -> 이걸 interface로 바꾸면,

// interface Person {
// 	name: string,
// 	age: number;
// }

// const person:Person = {
// 	name: 'Mark',
// 	age: 35
// };

// - 함수 출력
// function hello(p: Person): void {
// 	console.log('안녕하세요 ${p.name} 입니다.');
// }

// --------------------------------------
// - optional property (있어도 되고 없어도 되는 것으로 없어도 에러 안남)
// interface Person {
// 	name: string,
// 	age?: number;
// }

// const person:Person = {
// 	name: 'Mark',
// }; // 에러 안남

// - indexable type
// interface Person {
// 	name: string,
// 	[index: string]: string;
// }
// // 넣을거면 string 타입으로 넣을 수 있다.

// const person:Person = {
// 	name: 'Mark',
// };

// person.anybody = "Anna";
// person.anybody2 = "Anna";

// // 1. Array (index: number/string만 가능)
// interface Person2 {
// 	[index: number]: string;
// }
// const p2: Person2 = {};
// p2[0] = 'hi';
// p2[100] = 'hello';
// // 아무 number나 프롬프트해서 string값을 넣을 수 있음.

// //인터페이스도 가능
// interface Person {
// 	name: string;
// }
// interface Person2 {
// 	[index: number]: Person;
// }
// const p2: Person2 = {};
// --------------------------------------
// - function type화
// interface Person {
// 	name: string,
// 	hello(): void;
// }

// const person:Person = {
// 	name: 'Mark',
// 	hello: function() {

// 	}
// 	// 혹은 리턴 값이 void가 아니라면, arrow function도 가능
// 	// (위에가 hello(): string; 일 경우)
// 	hello:(): string ==> {
// 		return 'Hello';
// 	}
// 	// 아래처럼도 가능
// 	hello(): string {
// 		return 'Hello';
// 	}
// };
// --------------------------------------
// - class implements interface
// interface IPerson {
// 	name: string,
// 	hello(): void;
// }

// class Person implements IPerson {
// 	name: string = null;

// 	constructor(name: string) {
// 		this.name = name;
// 	}

// 	hello(): void {
// 		console.log('안녕하세요 ${this.name} 입니다.');
// 	}
// }

// const person: IPerson = new Person('Mark');

// ex)
// interface Person {
// 	name: string;
// 	age?: number;
// }

// interface Korean extends Person {
// 	city: string;
// }

// const k: Korean = {
// 	name: '이용재',
// 	city: '서울'
// };

// - function interface
// interface HelloPerson {
// 	(name: string, age?: number):void;
// }

// let helloPerson: HelloPerson = function() {

// }

// helloPerson('Mark');
// // -> 함수의 타입 체크는 할당할 때가 아니라 사용할 때 한다!
// // 이렇게 직접 넣어줘야 에러 안남. 따라서 아래처럼 쓸 수 있음.

// let helloPerson: HelloPerson = function(name: string) {
// 	console.log(name);
// }

// helloPerson('Mark');
// --------------------------------------
// - indexable Types (자세히)
// // indexable 타입의 index는 string 혹은 number만 가능
// // 넣어도 되고 안넣어도되는 옵셔널.
// // array
// interface StringArray {
// 	[index: number]: string;
// }

// const sa: StringArray = {};
// sa[100] = '백';

// // dictionary
// interface StringDictionary {
// 	[index: string]: string;
// }

// const sd: StringDictionary = {};
// sd.hundred = '백';

// interface StringArrayDictionary {
// 	[index: number]: string;
// 	[index: string]: string;
// } // 2개 넣을 수도 있음.

// const sad: StringArrayDictionary = {};
// sad[100] = '백';
// sad.hundred = '백';

// // 예외
// interaface StringDictionaryNo {
// 	[index: string]: string;
// 	// name: number;  // (x) 인덱서블 타입이 string 값을 가지기 때문에 number를 필수로 끌어오면 에러. string만 가능.
// }
