


// function Animals(name) {
//     this.name = name;

//     this.getName = () => this.name;
//     this.eat = () => console.log('I\'m eating......')
// }

// const Cat = new Animals("Bilyash");
// const Dog = new Animals("Uksus");
// const Mouse = new Animals("Claudia");


class Animals {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('I\'m eating......');
    }
    sound() {
        console.log('...');
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Cat extends Animals {
    constructor(name, food) {
        super(name);
        this.food = food;
    }
    sound() {
        console.log('meow');
    }
    pee() {
        console.log('I peed in the owner\'s shoes')
    }
}
class Dog extends Animals {
    constructor(name, food) {
        super(name);
        this.food = food;
    }
    sound() {
        console.log('woof');
    }
    pee() {
        console.log('I peed in on a tree')
    }
}

const Bilyash = new Cat('Bilyash', 'milk'); 
console.log(`dog name is ${Bilyash.name}`);
Bilyash.pee();

