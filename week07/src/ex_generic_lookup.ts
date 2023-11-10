interface Person {
    name: string;
    age: number;
}

functin getProperty<T, K extends keyof T> (obj: Text, key: K): T[K] {
    return obj[key];
}

const person: Person = {
    name: 'Mark',
    age: 35
};

getProperty(person, 'name');

//const a = 'name';
//type Test = keyof Person; // keyof는 리터럴 타입의 유니온