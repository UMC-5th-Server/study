function hello<T>(msg: T): T {
    return msg;
}
hello('hello');
hello<string>('33');

const a: string[] = [];
const b: Array<string> = [];

function hello2<T>(msg: T[]): T {   //배열 형태로도 사용 가능
    return msg[0];
}

class Person4<T extends string | number> {
    private name: T;
    constructor (name: T) {
        this.name = name;
    }
}
const dada = new Person4('dada');

interface Person5 {
    name: string;
    age: number;
}

function getProperty<T, K extends keyof T> (obj: T, key: K): T[K] {
    return obj[key];
}
function setProperty<T, K extends keyof T> (obj: T, key: K, value: T[K]): void {
    obj[key] = value;
}

const p: Person5 = {
    name: 'dada',
    age : 23
}

getProperty(p, 'name')
setProperty(p, 'age', 24)