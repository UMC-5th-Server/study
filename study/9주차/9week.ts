// 9. iterator

// ## for...of
//     - es3
//     - for (var i =...)
// - es5
//     - array.forEach
//     - break 를 할 수 없었따.
// - es6
//         - for of
//             - 원칙적으로는 배열에서만 사용 가능

// ## for...in
//     - 배열을 순회할 때는 사용하지 말것
//         - index가 number가 아니라 string으로 나온다.
//   - 배열의 프로퍼티를 순회할 수도 있따.
//   - prototype 체인의 프로퍼티를 순회할 수도 있다.
//   - 루프가 무작위로 수회할 수도 있다.
//   - for of를 쓸 것
//     - 객체를 순회할 때
//         - for (const prop of Object.keys(obj))도 사용할 수 있음

// ## target es3 forEach
//     - 트렌스파일시에 es3인데도 lib에서 잘못 판단되어서 적용이 안되고 es5 기준으로 생성됨

// ## Sysmbol.iterator
//     - 프로퍼티이며, 함수가 구현되어있으면, iterable 이라고 한다.
// - Array, Map, Set, String, Int32Array, Unit32Array, etc, 에는 내장된 구현체가 있으므로 이터러블 하다.
// - 그냥 객체는 이터러블하지 않다.
// - 이터레이터를 통해 이터러블한 객체의 Symbol.iterator함수를 호출한다.
// - traget: es3 or es5
//     - Array 에만 for..of사용 가능
//         - 일반 객체에 사용하면 오류
//             - target: es6
//                 - Symbol.iterator를 구현하면 사용 가능

// ## custom iterable

class CustomIterable implements Iterable<string> {
    private _array: Array<string> = ['first', 'second'];

    [Symbol.iterator]() {
        var nextIndex = 0;

        return {
            next: () => {
                return {
                    value: this._array[nextIndex++],
                    done: nextIndex > this._array.length
                }
            }
        }
    }
}

const cIterable = new CustomIterable();

for (const item of cIterable) {
    console.log(item);
}
//배열의 이터레이터를 돌면 예 for of 객체의 for을 돌리면 커스텀한 for of 로 돌리면 class 내부에 있는 배열도 사용 가능하기에 사용함.

// 10. Decorator
// Class
// Method
// Property
// Parameter

// 모든 decorator 는 function이다
class decorator
function hello(constructorFn: Function) {
    console.log(constructorFn);
}

function helloFactory(show: boolean) {
    if (show)
        return hello;
    else
        return null;
}

@helloFactory(false)
class Person {

}
class decorator expert
function hello(constructorFn: Function) {
    constructorFn.prototype.hello = function (): void {
        console.log('hello');
    }
}

@hello
class Person {

}

const p = new Person();
(<any>p).hello(); // 이런식으로 밖에 사용해야함

method decorator
function editable(canBeEditable: boolean) {
    return function (target: any, propName: string, description: PropertyDescriptor) {
        console.log(target);
        console.log(propName);
        console.log(description);

        description.writable = canBeEditable;
    }
}

class Person {

    constructor() {
        console.log('new Person ()');
    }

    @editable(false)
    hello(): void {
        console.log('hello');
    }

}

const p = new Person();
p.hello();

p.hello = function () {
    console.log('world');
}
p.hello();

property decorator
function writetable(canBeWriteable: boolean) {
    return function (target: any, propName: string): any {
        console.log(target);
        console.log(propName);

        return {
            writetable: canBeWriteable
        }
    }
}


class Person {

    @writetable(true)
    name: string = 'Mark';

    constructor() {
        console.log('new Person ()');
    }

    hello(): void {
        console.log('hello');
    }

}

const p = new Person();
console.log(p.name);
parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);

}

class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, @printInfo age: number) {
        this._name = name;
        this._age = age;
    }

    hello(@printInfo message: string): void {
        console.log(message)
    }

}


// const p = new Person('Mark', 35);
// 개인적으로 decorator는 예를들면 프레임워크를 만들때나 어떠한 모듈을 만들때 변수 검증 등을 하는데 사용하면 요긴하게 쓰일것 같다는 생각이 들었다.
// 11. Type Inference
// 타입 추론
// 기본적으로 타입을 명시적으로 스지 않을 때 추론하는 방법에 대한 규칙
// 명시적으로 쓰는 것은 타입 추론이 아니라 코드를 읽기 좋게 하는 지름길
// let은 기본적으로 우리가아는 기본 자료형으로 추론
// const는 리터럴 타입으로 추론
// 오브젝트 타입을 쓰지 않으면, 프로퍼티는 let 처럼 추론
// const person = {name: ‘Mark’, age: 35}
// person => {name:string; age: number}
// 대부분 추론은 쉽다.
// 단순 변수
// structing, destruction
// array, 함수의 리턴에서는 워하는데로 얻기가 힘들다.
// 배열 타입 추론
const aaray1 = []; // any type으로 추론함
const array2 = ['a', 'b'] // array string
const array3 = ['a', 1, 'cone'] // union type으로 추론함

class Animal {
    name: string;
}

class Dog extends Aniaml {
    dog: string;
}

class Cat extends Animal {
    cat: string;
}

const array4 = [new Dog(), new Cat()]; // union dog | cat
//리턴 타입 추론
function hello(message: string | number) {
    // 리터럴 타입의 world이거나 0을 추론
    if (message === 'world')
        return 'world'
    else
        return 0
}
//유니온 타입과 가드
interface Person {
    name: string;
    age: number;
}

interface Car {
    brand: string;
    wheel: number;
}

function isPerson(arg: any): arg is Person {
    return arg.name !== undefined;
} // 이 부분이 타입가드

function hello(obj: Person | Car) {
    if (isPerson(obj)) {
        obj.age;
    }
}
