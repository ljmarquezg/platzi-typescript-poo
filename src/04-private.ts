export class MyDate {
    year: number;
    month: number;
    private day: number; // This property is private and only accessible within class 'MyDate'.

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month
        this.day = day;
    }

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
console.log(myDate.getDay());
/*
    myDate.addPadding(5); // Error: Property 'addPadding' is private and only accessible within class 'MyDate'.
*/