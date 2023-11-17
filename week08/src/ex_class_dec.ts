function hello(constructFn: Function) {
    // console.log(constructFn)
    constructFn.prototype.hello = function() {
        console.log('hello');
    }
}

// function helloFactory(show: boolean) {
//     if (show) [
//         return hello;
//     ] else {
//         return null;
//     }
    
// }

// function editable(canBeEditable: boolean) {
//     return function(target: any, propName: string, description: PropertyDescriptor) {
//         console.log(target);
//         console.log(propName);
//         console.log(description);
//         description.writable = canBeEditable;
//     }
// }

// property decotator
// function writable(canBeWritable: boolean) {
//     return function(target: any, propName: string): any {
//             console.log(target);
//             console.log(propName);

//             return {
//                 writable: canBeWritable
//             };
//     }
// }

function printInfo (target: any, methodName: string, paramIndex: number) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}

class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, @printInfo age: number) {
        this._name = name;
        this._age = age;
    }

    hello(@printInfo message: string) {
        console.log(message);
    }

    // @editable(true)
    // hello() {
    //     console.log('hello');
    // }
}

const p = new Person();
console.log(p.name);
// p.hello();
// p.hello = function() {
//     console.log('World');
// }
// p.hello();