// // // 
// // class Parent {
// //     private privateProp: string;
// //     protected protectedProp: string;

// //     constructor() {

// //     }
// // }

// // class Child extends Parent {
// //     constructor() {
// //         super();

// //         this.protectedProp = 'protected';
// //         // this.privateProp = 'private'; // (X)
// //     }
// // }

// // /*

// // 1. 부모에서 private 으로 설정된 프로퍼티는 상속을 받은 자식에서도 접근할 수 없다.

// // 2. 부모에서 protected 로 설정된 프로퍼티는 상속을 받은 자식에서 접근이 가능하다.

// // 3. 상속을 받은 자식 클래스에서 부모 클래스에 this 를 통해 접근하려면, 생성자에서 super(); 를 통해 초기화 해야한다.

// // */


// // class Person {
// //     constructor(private _name: string, private _age: number) { }

// //     print(): void {
// //         console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 살 입니다.`);
// //     }

// //     printName = (): void => {
// //         console.log(`이름은 ${this._name} 입니다.`);
// //     }

// //     private printAge(): void {
// //         console.log(`나이는 ${this._age} 살 입니다.`);
// //     }
// // }

// // const person: Person = new Person('Mark', 35);
// // person.print(); // 이름은 Mark 이고, 나이는 35 살 입니다.
// // person.printName(); // 이름은 Mark 입니다.
// // // person.printAge(); // (X)

// // /*

// // 1. 클래스 내부에 작성된 메서드는 public 이 디폴트
// // 2. arrow function 으로 작성 가능
// // 3. private 을 이용하면 클래스 외부애서 접근 불가

// // */

// // class Parent {
// //     constructor(protected _name: string, protected _age: number) { }

// //     print(): void {
// //         console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 살 입니다.`);
// //     }

// //     printName = (): void => {
// //         console.log(`이름은 ${this._name} 입니다.`);
// //     }

// //     private printAge(): void {
// //         console.log(`나이는 ${this._age} 살 입니다.`);
// //     }
// // }

// // class Child extends Parent {
// //     _name = 'Mark Jr.';
// // }

// // // const p: Child = new Child(); // (X)
// // const p: Child = new Child('', 5);
// // p.print(); // 이름은 Son 이고, 나이는 5 살 입니다.

// // /*

// // 1. 상속은 extends 키워드를 이용한다.
// // 2. 자식 클래스에서 디폴트 생성자는 부모의 생성자와 입력 형태가 같다.

// // */

// // class Parent {
// //     constructor(protected _name: string, private _age: number) { }

// //     print(): void {
// //         console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 살 입니다.`);
// //     }

// //     protected printName = (): void => {
// //         console.log(`이름은 ${this._name} 입니다.`);
// //     }

// //     protected printAge(): void {
// //         console.log(`나이는 ${this._age} 살 입니다.`);
// //     }
// // }

// // class Child extends Parent {
// //     constructor(age: number) {
// //         super('Mark Jr.', age);

// //         this.printName();
// //         this.printAge();
// //     }
// // }

// // const p: Child = new Child(1);
// // // 이름은 Son 입니다.
// // // 나이는 1 살 입니다.

// // /*

// // 1. 생성자를 정의하고, this 를 사용하려면, super 를 통해 부모의 생성자를 호출해줘야 한다.
// // 2. super 를 호출할때는 부모 생성자의 입력 타입이 같아야 한다.
// // 3. super 를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.
// // 4. protected 함수를 호출해서 그 안의 private 을 출력하는 것에 주의한다.

// // */

// // class Person {
// //     private _name: string;
// //     private _age: number;

// //     constructor(name: string, age: number) {
// //         this._name = name;
// //         this._age = age;
// //     }

// //     get name() {
// //         return this._name;
// //     }

// //     set name(name: string) {
// //         // 작업
// //         this._name = `${name} Lee`;
// //     }
// // }

// // const person: Person = new Person('Mark', 35);

// // console.log(person.name);
// // person.name = 'jinny';
// // console.log(person.name);

// // /*

// // 1. _ 를 변수명 앞에 붙이고, 내부에서만 사용한다.
// // 2. getter 를 함수처럼 설정하면, 프로퍼티처럼 꺼내쓸수있다.
// // 3. 마찬가지로 setter 를 함수처럼 설정하면, 추가 작업을 하고 셋팅할 수 있다.

// // */
// class Person {
//     public static CITY = "";
//     private static lastName: string = 'Lee';
//     private _name: string;
//     private _age: number;

//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }

//     public print() {
//         console.log(`${this._name} ${Person.lastName} in ${Person.CITY}.`);
//     }
// }

// const person: Person = new Person('Jinny', 23);
// Person.CITY = 'Seoul';
// person.print(); // Mark Lee in Seoul.

// /*

// 1. static 키워드를 붙힌 프로퍼티는 클래스.프로퍼티로 사용한다.
// 2. static 프로퍼티에 private, protected 를 붙히면 똑같이 동작한다.

// */
const p: Preference = Preference.getInstance();

class Person {
    private static PROPERTY = '프라이빗 프로퍼티';
    private static METHOD() {
        console.log('프라이빗 메서드');
    }

    constructor() {
        console.log(Person.PROPERTY);
        Person.METHOD();
    }
}
