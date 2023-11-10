interface Person {
    name: String;
    age?: number;
    
}

const person: Person = {
    name: 'Mark'
};

function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name}입니다.`);
}



// indexable type - 딕셔너리같은 느낌
interface Person2 {
    name: String;
    [index: string]: string;
    
}

const person2: Person2 = {
    name: 'Mark'
};

person.anybody = 'Anna';
person.anybody2 = 'Anna';

function hello2(p: Person2): void {
    console.log(`안녕하세요 ${p.name}입니다.`);
}

// indexable type - Array같은 느낌
interface Person3 {
    [index: number]: string;
}

const person3: Person3 = {};

person2[0] = 'hi';
person2[100] = 'hello';