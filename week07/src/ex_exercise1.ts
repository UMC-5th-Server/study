function Car(name) {
    this.name = name;
    this.speed = 0;

    this.honk = function() {
        console.log('부우우웅');
    };
    
    this.accelerate = function(speed) {
        this.speed = this.speed + speed;
    }
}

class Car {
    public speed: number = 0;

    constructor(public name: string) {

    }

    public honk(): void {
        console.log('부우우웅');
    };
    
    public accelerate(speed) {
        this.speed = this.speed + speed;
    }
}

const car = new Car('BENZ');
car.honk();
console.log(car.speed);
car.accelerate(10);
console.log(car.speed);