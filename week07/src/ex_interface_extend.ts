interface Person {
    name: string;
    age?: number;
}

interface Korean extends Person {
    city: string;
}

const k: Korean = {
    name: '이용재',
    city:'서울'
};