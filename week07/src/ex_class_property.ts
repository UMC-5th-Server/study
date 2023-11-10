class Person {
    name: string = 'Mark'
    age: number = 35

    constructor(name: string) {
        console.log(this.name);
    }
}

const person = new Person('Mark');

console.log(person.name);