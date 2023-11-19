# Interface
    interface Person {              //Person은 인터페이스명
        name : string;              //변수명: 타입;
        age? : number;              //?는 입력 필수X
        [index: string] : string    //indexable type
        //dictionay와 유사 (string 또는 number를 키로 string값을 저장)
        hello(): string;               //구현되지 않은 function
    }
    const p: Person = {
        name : 'dada';
        hello: (): string => {
            return 'Hello'
        }
    }
    p.indexable = '값';

    interface IPerson {
        name: string;
        hello(): void;
    }
    class Person implements IPerson {
        name: string;
        constructor(name: string) {     //생성자
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

=> interface끼리도 상속가능


--------------------------------------------------------------

# Class
    class Person2 {
        name: string;               //타입 미지정 public
        protected age: number;      //이 클래스 내에서만 접근
        private phone: string;      //부모, 자식에서만 접근

        constructor (name: string) {    //private name: string 가능 (위에서 선언X)
            this.name = name;   
        }
        hello(): void {
            console.log(this.name);
        }
    }
    const person2 = new Person2('dada');
    person2.hello();

    class Child extends Person2 {
        age = 23;
        constructor(){
            super('자식');          //부모 생성자의 인자와 동일
        }
    }
    const child = new Child()
    child.hello();

//값을 할당하지 않으면, undefind

- 싱글톤 패턴
    class Person3 {
        private static Instance: Person3;

        public static getInstance(): Person3 {
            if (Person3.Instance === null) {
                Person3.Instance = new Person3();
            }
            return Person3.Instance;
        }
        private constructor () { }
    }

- readonly


--------------------------------------------------------------

# Generic
타입을 변수로 주고 싶을 때, 사용

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

- Generic Class

    class Person4<T> {
        private name: T;
        constructor (name: T) {
            this.name = name;
        }
    }
    const dada = new Person4('dada');

- Generic with extends

    class Person4<T extends string | number> { ... }

- muti Generic

    class Person4<T, K> {
        private name: T;
        private age: K;
        constructor (name: T, age: K) {
            this.name = name;
            this.age = age
        }
    }
    const dada = new Person4('dada', 23);

- type lookup system

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