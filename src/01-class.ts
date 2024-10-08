const date = new Date();
date.getHours();
date.getTime();
date.toDateString();

const date2 = new Date(1998,10,15);
date.getHours();
date.getTime();
date.toDateString();


console.log(date);
console.log(date2);

let myVar;

export class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month
        this.day = day;
    }
}

myVar = new MyDate(2024, 3, 15);
console.log(myVar);