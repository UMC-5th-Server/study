
const PROPERTY = '모듈 내 변수';
function METHOD() {
    console.log('모듈 내 함수');
}

export class Person {
    constructor() {
        console.log(PROPERTY);
        METHOD();
    }
}

class Preference {
    public static getInstance() {
        if (Preference.instance === null) {
            Preference.instance = new Preference();
        }

        return Preference.instance;
    }
    private static instance: Preference = null;
    private constructor() {

    }
}