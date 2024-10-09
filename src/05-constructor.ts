export class MyDate {

    // This is a shorthand for defining and initializing a public property in the same
    constructor(
        public year: number = 1990, 
        public month: number = 1, 
        private day: number = 12
    ) {}

    printFormat(): string {
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }

    add(amount: number, type: 'days' | 'month' | 'years'): void {
        if(type === 'days') {
            this.day += amount
        };

        if(type === 'month') {
            this.month += amount;
        }

        if(type === 'years') {
            this.year+= amount;
        }
    }

    getDay(): number {
        return this.day;
    }
}

const myDate = new MyDate(2024, 3, 10);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log('() => ', myDate2.printFormat());

const myDate3 = new MyDate(2021);
console.log('(2021) => ', myDate3.printFormat());

const myDate4 = new MyDate(2021, 3);
console.log('(2021, 3) => ', myDate4.printFormat());

/*
    myDate.addPadding(5); // Error: Property 'addPadding' is private and only accessible within class 'MyDate'.
*/