interface Person {
    name: String;
    age: number;
}

const person: Person = {
    name: 'Mark',
    age: 35
};

function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name}입니다.`);
}