/* Aliasing Primitive Type */
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;



/* Aliasing Union Type */
let person: string | number = 0;
person = 'Mark';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anna';



/* Aliasing Tuple */
let person: [string, number] = ['Mark', 35];

type PersonTuple = [string, number];

let another: PersonTuple = ['Anna', 24];



/* 인터페이스와의 차이점 1 */
type Alias = {num: number}

interface Interface {
    num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;



/* 인터페이스와의 차이점 2 */
type PersonAlias = {
    name: string;
    age: number;
};

interface IPerson extends PersonAlias {

}

let ip: IPerson = {
    name: 'Mark';
    age: number;

    hello() {
        console.log('안녕하세요');
    }
}

let pi: PersonImpl = new PersonImpl();
pi.hello();

class PersonChild extends PersonAlias {
    
}