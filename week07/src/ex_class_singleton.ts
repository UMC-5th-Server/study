class Person {
    private static Instance: Person = null;

    public static getInstance(): Person {
        if (Person.Instance === null) {
            Person.Instance = new Person();
        }

        return Person.Instance;
    }

    private constructor() {

    }

    hello() {

    }
}

const p = Person.getInstance();
p.hello();