export class MyService {

    static instance: MyService | null = null;

    private constructor(
        private name: string
    ) {
    }

    getName(){
        return this.name;
    }
    
    static create(name: string): MyService {
        if(MyService.instance === null) {
            console.log('created');
            MyService.instance = new MyService(name);
        }

        return MyService.instance;
    }
}

const myService1 = MyService.create('Service1');
console.log(myService1.getName());

const myService2 = MyService.create('Service2');
console.log(myService2.getName());

const myService3 = MyService.create('Service3');
console.log(myService3.getName());

console.log(myService1 === myService2 ); // false