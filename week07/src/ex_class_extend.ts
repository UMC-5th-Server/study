class Person {
    constructor(protected _name: string, private _age: number) {
    
    }

    hello(): void {
        console.log(this._name);
    }
}

const person: Person = new Person('Mark', 35);
person.hello();

class Child extends Person {
    constructor() {
        super('Mark Jr.', 5);
    }
}

const child: Child = new Child();
child.hello();