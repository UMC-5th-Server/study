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