class Person {
    name: string;
    age: number;

    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person('Mark');

console.log(person.name);