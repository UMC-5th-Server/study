interface IPerson {
    getName();
}

class Person {
    static HEIGHT: number = 160;
    constructor(private _name: string, private _age: number) {
    
    }

    hello(): void {
        console.log(this._name);
    }

    getName(): string {
        return this._name;
    }
    
    setName(newName: string) {
        this._name = name;
    }
}

const person: Person = new Person('Mark', 35);
Person.HEIGHT;