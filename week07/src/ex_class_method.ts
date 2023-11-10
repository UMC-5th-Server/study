class Person {
    protected _name: string = 'Mark';
    private _age: number = null;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    hello(): void {
        console.log(this._name);
    }
}

const person: Person = new Person('Mark', 35);
person.hello();