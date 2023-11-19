# Iterator
- for (... of 배열)

- Symbol.iterator
프로퍼티이면서, 함수가 구현되어 있으면 => iterable
Symbol.iterator를 구현하면 iterator 사용 가능


------------------------------------------
# Decorator
- Class Decorator 
    function hello(constructFn: Function){
        console.log(constructFn);
    }

    function helloFactory(show: boolean) {
        if (show) {
            return hello;
        } else {
            return null;
        }
        
    }

    @helloFactory(false)
    class Person {
    }
    ------

    function hello(constructFn: Function){
        constructFn.prototype.hello = function(){
            console.log('hello');
        }
    }

    @hello
    class Person {

    }

    const p = new Person();
    (<any>p).hello();

- Method Decorator 
    function editable(canBeEditable: boolean){
        return function(target: any, propsName: string, description: PropertyDescriptor){
            console.log(target);
            console.log(propsName);
            console.log(description);
            description.writable = canBeEditable;
        }
    }

    class Person {
        constructor(){
            console.log('new Person');
        }

        @editable(false)
        hello(){
            console.log('hello');
        }
    }

    const p = new Person();
    p.hello();
    p.hello = function() {
        console.log("world");
    }
    p.hello();  //변동X, hello

- Property Decorator
    function writable(canBeWritable: boolean){
        return function(target: any, propsName: string): any{
            console.log(target);
            console.log(propsName);
            return {
                writable: canBeWritable
            };
        }
    }

    class Person {
        @writable(true)
        name: string = 'dada';
        constructor(){
            console.log('new Person');
        }
    }

    const p = new Person();
    console.log(p.name)

- Parameter Decorator
    function printInfo(target: any, methodName: string, paramIndex: number) {
        console.log(target);
        console.log(methodName);
        console.log(paramIndex);
    }

    class Person {
        private _name: string;
        private _age: number;

        constructor(name: string, @printInfo age: number){
            this._name = name;
            this._age = age;
        }
        hello(@printInfo msg:string) {
            console.log(msg);
        }
    }  


------------------------------------------
# Type Interface
타입 추론
타입을 명시적으로 쓰지 않을 때, 추론하는 방법에 대한 규칙
대부분은 추론이 쉬우나, array나 함수의 반환에서...

- 타입 가드
    function isPerson(arg: any): arg is Person {
        return arg.name !== undefined; //name이 있으면 Person
    }
    Person객체인지



