class Person {
    protected _name: string = 'Mark';
    private _age: number = null;
}

class Child extends Person {
    constructor() {
        super();
        this._name = '아들';
    }

    getName() {
    }
}

const person: Child = new Child();

console.log(person);