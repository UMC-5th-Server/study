class Person<T extends string | number> {
    private _name: T;

    constructor(name: T) {
        this._name = name;
    }
}

// new Person(false); -> 오류

// const mark = new Person('Mark');
// new Person<number>('Mark');