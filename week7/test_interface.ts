interface IPerson {
    name: string;
    hello(): void;
}
class Person implements IPerson {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    hello(): void {
        console.log(`hello ${this.name}`);
    }
    public hi(): void {
        console.log(`hi ${this.name}`);
    }
}

const person: IPerson = new Person('dada');
