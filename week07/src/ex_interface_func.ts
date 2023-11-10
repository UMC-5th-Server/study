interface Person {
    name: String;
    hello(): void;
}

const person: Person = {
    name: 'Mark',
    hello: (): string {
        return 'Hello';
    }
};

function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name}입니다.`);
}