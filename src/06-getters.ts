export class MyDate {

    // This is a shorthand for defining and initializing a public property in the same
    constructor(
        public year: number = 1990, 
        public month: number = 1, 
        private _day: number = 12
    ) {}

    printFormat(): string {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(num: number): string {
        return num < 10 ? `0${num}` : `${num}`;
    }

    add(amount: number, type: 'days' | 'month' | 'years'): void {
        if(type === 'days') {
            this._day += amount
        };

        if(type === 'month') {
            this.month += amount;
        }

        if(type === 'years') {
            this.year+= amount;
        }
    }

    get day(): number {
        return this._day;
    }

    get isLeap(): boolean {
        return (this.year % 400 === 0 || this.year % 100 !== 0) && this.year % 4 == 0;
    }
}

const myDate = new MyDate(2024, 3, 10);
console.log(myDate.printFormat());
console.log('2024', myDate.isLeap);

const myDate2 = new MyDate(2000);
console.log('2000', myDate2.isLeap);

const myDate3 = new MyDate(2004);
console.log('2001', myDate3.isLeap);