export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month
        this.day = day;
    }

    printFormat(): string {
        return `${this.year}-${this.month}-${this.day}`;
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
}

const myDate = new MyDate(2024, 3, 15);
console.log(myDate);

myDate.add(5, 'days');
console.log(myDate.printFormat());

myDate.add(5, 'month');
console.log(myDate.printFormat());

console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);