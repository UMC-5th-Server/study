const array1 = []; // any 타입
const array2 = ["a", "b", "c"]; // string[] 타입
const array3 = ["a", 1.2, 3, false]; // string | number | boolean 타입

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  dog: string;

  constructor(dog: string) {
    super(dog);
    this.dog = dog;
  }
}

class Cat extends Animal {
  cat: string;

  constructor(cat: string) {
    super(cat);
    this.cat = cat;
  }
}

const array4 = [new Dog("dog"), new Cat("cat")]; // Dog | Cat 타입
