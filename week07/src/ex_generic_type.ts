type HelloGeneric = <T>(message: T) => T;

const hello: HelloGeneric = <T>(message: T) => {

}

console.log(hello<string>('Hello').length);