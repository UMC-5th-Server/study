// [📘 타입스크립트 @데코레이터 개념 & 사용법](https://inpa.tistory.com/entry/TS-📘-타입스크립트-데코레이터-개념-사용법-정리)

// - class Decorator

//     function hello(constructFn: Function) { // 괄호 인자 안에 아무것도 안쓰면 에러
//     	console.log(constructFn);
//     }

//     @hello
//     class Person {

//     }
//     ----------------------------------
//     function hello(constructFn: Function) {
//     	console.log(constructFn);
//     }

//     function helloFactory(show: boolean): {
//     	if(show) {
//     		return hello;
//     	} else {
//     		return null;
//     	}
//     }
//     // helloFactory는 팩토리 스타일

//     @helloFactory(true)
//     class Person {

//     }
//     // true -> console 찍힘. false-> 안찍힘.
//     ----------------------------------
//     function hello(constructFn: Function) {
//     	constructFn.prototype.hello = function() {
//     		console.log('hello');
//     	}
//     }

//     @hello
//     class Person {

//     }

//     const p = new Person();
//     (<any>p).hello();

// - Method Decorator

//     function editable(canBeEditable: boolean) {
//     	return funtion(target: any, propName: string, description: PropertyDescriptor) {
//     	// 인자 3가지 넣어주면 됨.
//     		console.log(target); // Person {} (해당 함수)
//     		console.log(propName);  // hello (함수 이름)
//     		console.log(description);  // 새로 정의하거나 수정하려는 속성에 대해 기술하는 것으로 안에 속성들이 있음
//     		description.writable = canBeEditable;  // 안되게 하기
//     	}
//     }

//     class Person {
//     	constructor() {
//     		console.log('new Person()');
//     	}

//     	@editable(true)
//     	hello() {
//     		console.log('hello');
//     	}
//     }

//     const p = new Person();
//     p.hello();  // hello 출력됨
//     p.hello() = funtion() {
//     	console.log('World');
//     }
//     p.hello();  // hello world 출력됨. but, @editable(false)로 하면 hello hello로 안바뀜

// - Property Decorator

//     function writable(canBeEditable: boolean) {
//     	return funtion(target: any, propName: string): any {
//     	// 인자 3가지 넣어주면 됨.
//     		console.log(target); // Person {} (해당 함수)
//     		console.log(propName);  // hello (함수 이름)

//     		return {
//     			writable: canWritable
//     		};
//     	}
//     }

//     class Person {
//     	@wriable(true)
//     	name: string = 'Mark';

//     	constructor() {
//     		console.log('new Person()');
//     	}
//     }

//     const p = new Person();
//     consol.log(p.name);

// - Parameter Decorator

//     function printInfo(target: any, methodName: string, paramIndex: number) {
//     	console.log(target);
//     	console.log(methodName);
//     	console.log(paramIndex);
//     }

//     class Person {
//     	private _name: string;
//     	private _age: number;

//     	constructor(name: string, @printInfo age: number) {
//     		this._name = name;
//     		this._age = age;
//     	}

//     	hello(@printInfo message: string) {
//     		console.log(message);
//     	}
//     }

//     const p = new Person('Mark', 35);
//     consol.log(p.name);
