export class Animal {
    constructor(
        public name: string
    ) {
        this.name = name;
    }

    move(): void {
        console.log('Moving...');
    }

    greetings(): string {
        return `Hello, I'm ${this.name}`;
    }
};

const animal = new Animal('Dog');
console.log(animal.greetings());
animal.move();

export class Dog extends Animal {
    constructor(
        name: string,
        public owner: string
    ) {
        super(name);
        this.owner = owner;
    }

    woff(times: number): void {
        for (let i= 0; i < times; i++) {
            console.log('Bwoff!');
        } 
    }
}

const dog = new Dog('Dog', 'Carlos');
console.log(dog.greetings());
dog.move();
dog.woff(3);
console.log(dog.owner);