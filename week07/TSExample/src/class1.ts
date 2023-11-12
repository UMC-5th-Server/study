class C1_Person {
  name: string;
  age: number = 0.0;

  constructor(name: string) {
    this.name = name;
  }
}

const c1_Person = new C1_Person("Mark");
c1_Person.age = 35;
console.log(person);
