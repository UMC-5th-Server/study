interface G4_Person {
  name: string;
  age: number;
}

// type Test = keyof G4_Person;

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const g4_person: G4_Person = {
  name: "Mark",
  age: 35,
};

getProperty(g4_person, "age");
