export class MyDate {

    // This is a shorthand for defining and initializing a public property in the same
    constructor(
        public year: number = 1990, 
        private _month: number = 1, 
        private _day: number = 12
    ) {}

    printFormat(): string {
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
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

    set month(month: number) {
        if(month < 1 || month > 12) {
            throw new Error('Invalid month');
        } 
        this._month = month;
    }

    get month(): number {
        return this._month;
    }
}

const myDate = new MyDate(2024, 3, 10);
console.log('Original Date', myDate.printFormat());
myDate.month = 28;
console.log('New Month', myDate.month);
