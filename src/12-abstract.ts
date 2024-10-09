export abstract class Animal {
    constructor(
        protected name: string
    ) {
        this.name = name;
    }

    move(): void {
        throw new Error('Method not implemented.');
    }

    greetings(): string {
        throw new Error('Method not implemented.');
    }
    
    protected doSomething(): void {
        throw new Error('Method not implemented.');
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

/**
 * const animal = new Animal('Animal'); Devuelve un error porque la clase es abstracta
* */

const dog = new Dog('Dog', 'Carlos');
dog.greetings();
dog.woff(1);