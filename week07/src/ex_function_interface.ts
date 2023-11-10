interface HelloPerson {
    (name: string, age?: number): void;
}

let helloPerson: HelloPerson = function(name: string) {
    console.log(name);
}

helloPerson('Mark');