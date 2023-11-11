class Person2 {
    static HEIGHT: number = 160;    //static
    name: string;                   //타입 미지정 public
    protected age: number;          //이 클래스 내에서만 접근
    private phone: string;          //부모, 자식에서만 접근

    constructor (name: string) {    //private name: string 가능 (위에서 선언X)
        this.name = name;   
    }
    hello(): void {
        console.log(this.name);
    }
    setPhone(phone: string){        //set phone도 가능
        this.phone = phone;
    }
    getPhone(): string {            //get phone도 가능
        return this.phone;
    }
}
const person2 = new Person2('dada');
person2.hello();
Person2.HEIGHT

class Child extends Person2 {
    age = 23;
    constructor(){
        super('자식');          //부모 생성자의 인자와 동일
    }
}
const child = new Child()
child.hello();

//값을 할당하지 않으면, undefind


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