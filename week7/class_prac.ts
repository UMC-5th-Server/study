// class Person {
// 	name: string = 'Mark';
// 	age: number = null;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// const person = new Person('Mark');
// //person.age = 35;
// // console.log(person); => 개발자 도구 키고 확인해보면 name에만 값이 들어가있고 age는 undefined
// console.log(person.name);

// /*
// 1. 생성자 함수가 없으면, 디폴트 생성자가 불린다.
// 2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined이다.
// => 오브젝트에 프로퍼티가 아예 존재하지 않는다.
// 3. 접근제어자 (Access Modifier)는 public이 디폴트이다.
// */

// // private 설정
// class Person {
// 	private _name: string = 'Mark';
// 	private _age: number = null;

// 	constructor(name: string) {
// 		this._name = name;
// 	}
// }
// /*
// 1. private 으로 설정된 프로퍼티는 dot으로 접근할 수 없다.
// 2. 클래스 내부에서는 private 프로퍼티를 사용할 수 있다.
// 3. private이 붙은 변수나 함수는 _를 이름 앞에 붙이는데, 이는 문법이 아니라 널리 쓰이는 코딩 컨벤션이다.
// + 상속 시, 내부 변수에 접근이 불가능
// */

// // protected
// class Person {
// 	protected _name: string = 'Mark';
// 	private _age: number = null;
// }

// class Child extends Person {
// 	constructor() {
// 		super();

// 		this._name = '아들';
// 	}
// }

// const person: Child = new Child();

// // 메서드
// class Person {
// 	protected _name: string = 'Mark';
// 	private _age: number = null;

// 	constructor(name: string, age: number) {
// 		this._name = name;
// 		this._age = age;
// 	}

// 	hello() : void {
// 		console.log(this._name);
// 	}

// 	printName = (): void => {
// 		console.log(this._name);
// }

// const person: Person = new Person('Mark', 35);
// person.hello();
// person.printName();

// // 상속
// class Person {
// 	constructor(protected _name: string, protected _age: number) {

// 	}

// 	hello(): void {
// 		console.log(this._name);
// 	}
// }

// const person: Person = new Person('Mark', 35);
// person.hello();

// class Child extends Person {
// 	_name: string = 'Mark Jr.';   // _name을 덮어씀.

// 	constructor() {  // constructor에 super가 꼭 들어가야함.
// 		super('Mark Jr.', 5);
// 	}
// }

// //const child: Child = new Child('Mark', 35);
// const child: Child = new Child();
// child.hello();

// /*
// 1. 생성자를 정의하고, this를 사용하려면, super를 통해 부모의 생성자를 호출해줘야 한다.
// 2. super를 호출할 때는 부모 생성자의 입력 타입이 같아야 한다.
// 3. super를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.
// 4. protected 함수를 호출해서 그 안의 private을 출력하는 것에 주의한다.
// */

// // getter, setter
// class Person {
// 	constructor(private _name: string, private _age: number) {

// 	}

// 	hello(): void {
// 		console.log(this._name);
// 	}

// 	get name(): string {
// 		return this._name;
// 	}

// 	set name(newName: string) {
// 		this._name = name;
// 	}

// 	// 혹은
// 	getName(): string {
// 		return this._name;
// 	}

// 	setName(newName: string) {
// 		this._name = name;
// 	}
// }

// const person: Person = new Person('Mark', 35);
// person.getName();

// // getter 혹은 setter 둘 중 하나만 쓰게 하고 싶을 때
// interface IPerson {
// 	getName();
// }

// class Person implements IPerson {
// 	constructor(private _name: string, private _age: number) {

// 	}

// 	hello(): void {
// 		console.log(this._name);
// 	}

// 	getName(): string {
// 		return this._name;
// 	}

// 	setName(newName: string) {
// 		this._name = name;
// 	}
// }

// const person: IPerson = new Person('Mark', 35);
// person.getName();

// // static 변수
// class Person {
// 	static HEIGHT: number = 160;
// 	constructor(private _name: string, private _age: number) {

// 	}

// 	hello(): void {
// 		console.log(this._name);
// 	}

// 	getName(): string {
// 		return this._name;
// 	}

// 	setName(newName: string) {
// 		this._name = name;
// 	}
// }

// const person: Person = new Person('Mark', 35);
// Person.HEIGHT = 170;

// // static 메서드
// class Person {
// 	public static Talk(): void {
// 		console.log('안녕하세요.');
// 	}
// }

// Person.Talk(); // 안녕하세요.

// // abstract class
// /*
// 1. abstract 키워드가 사용된 클래스는 new 로 생성할 수 없다.
// 2. abstract 키워드가 사용된 클래스를 상속하면 abstract 키워드가 붙은 함수를 구현해야 한다.
// */

// // class와 private constructor
// class Preference {
// 	private constructor() {
// 	}
// }

// // const p: Perference = new Preference(); (x)
// /*
// 1. 생성자 함수 앞에 접근제어자인 private 을 붙일 수 있다.
// 2. 외부에서 생성이 불가능하다.
// */

// // class 와 싱글톤 패턴
// class Person {
// 	private static Instance: Person = null;

// 	public static getInstance(): Person {
// 		if (Person.Instance === null) {
// 			Person.Instance = new Person();
// 		}
// 		return Person.Instance;
// 	}

// 	private constructor() {

// 	}

// 	hello() {
// 	}
// }

// const p = Person.getInstance();
// p.hello();

// // exercise
// /*
// function Car(name) {
// 	this.name = name;
// 	this.speed = 0;

// 	this.honk = function() {
// 		console.log("부우우웅");
// 	};

// 	this.accelerate = function(speed) {
// 		this.speed = this.speed + speed:
// 	}
// }
// */
// class Car {
// 	public _speed: number = 0;
// 	constructor(private name: string) {
// 	}

// 	public honk(): void {
// 		console.log("부우우웅");
// 	};

// 	public accelerate(speed) {
// 		this._speed = this._speed + speed:
// 	}

// 	get speed(): number {
// 		return this._speed;
// }

// const car = new Car('BENZ');
// car.honk();
// console.log(car.speed);
// car.accelerate(10);
// console.log(car.speed);

// interface ICar {
// 	honk(): void;
// 	accelerate(speed: number): void;
// 	getSpeed(): number;
// }

// class Car implements ICar {
// 	public _speed: number = 0;
// 	constructor(private name: string) {
// 	}

// 	public honk(): void {
// 		console.log("부우우웅");
// 	};

// 	public accelerate(speed) {
// 		this._speed = this._speed + speed:
// 	}

// 	public getSpeed(): number {
// 		return this._speed;
// }

// const car: ICar = new Car('BENZ');
// car.honk();
// console.log(car.getSpeed());
// car.accelerate(10);
// console.log(car.getSpeed());
