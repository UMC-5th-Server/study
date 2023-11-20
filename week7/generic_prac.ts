// //타입을 변수로 주고 싶을 때 사용 (any 대신 generic으로 사용)
// function helloString(message: string): string{
// 	return message;
// }

// function helloNumber(message: number): number{
// 	return message;
// }

// function hello<T>(message:T): T {
// 	return message;
// }
// hello('Mark');
// hello<string>('Mark');
// hello('Mark').length;  // 문자열 내장 함수 사용 가능
// hello(35);

// // array
// const a: string[] = [];
// const b: Array<string> = [];

// function hello<T>(messages: T[]): T {
// 	return messages[0];
// }

// // generic type

// // generic class
// class Person<T> {
// 	private _name: T;

// 	constructor(name: T) {
// 		this._name = name;
// 	}
// }

// const mark = new Person('Mark');
// // new Person<number> ('Mark'); -> 에러

// // 상속
// class Person<T extends string | number> {
// 	private _name: T;

// 	constructor(name: T) {
// 		this._name = name;
// 	}
// }

// const mark = new Person('Mark');

// // multipule type (제너릭 여러개)
// class Person<T, K> {
// 	private _name: T;
// 	private _age: K;

// 	constructor(name: T, age: K) {
// 		this._name = name;
// 		this._age = age;
// 	}
// }

// const mark = new Person('Mark', 35);

// // type lookup system
// interface Person {
// 	name: string;
// 	age: number;
// }

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[k] {
// 	return obj[key];
// }

// function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
// 	obj[key] = value;
// }

// const person: Person = {
// 	name: 'Mark',
// 	age: 35
// }

// getProperty(person, 'name');
// // getProperty(person, 'name1');  // 작성 시 바로 에러 표기 됨. but, 위에서 제너릭 안써주면 에러 안남.
// setProperty(person, 'name', 'Anna');
