export class Animal {
    constructor(
        protected name: string
    ) {
        this.name = name;
    }

    move(): void {
        console.log('Moving...');
    }

    greetings(): string {
        return `Hello, I'm ${this.name}`;
    }
    
    protected doSomething(): void {
        console.log('Doing something...');
    }
};

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
            console.log(`Bwoff! ${this.name}`);
        } 

        this.doSomething();
    }

    move(): void {
        super.move();
        console.log('Running as a dog...');
    }
}

const dog = new Dog('Dog', 'Carlos');
console.log(dog.greetings());
// dog.name = 'Doggy';
dog.woff(1);
dog.move();