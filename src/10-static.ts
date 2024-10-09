console.log(Math.PI);
console.log(Math.abs(-5));

class myMath {
    static readonly PI = 3.14;

    static max(...numbers: number[]): number {
        return numbers.reduce((max, item) => max > item ? max : item, numbers[0]);
    }
}

console.log(myMath.PI);
console.log(myMath.max(1,2,4031,5,6))
const numbers = [-1,-29102,-4031,-5,-6];
console.log(myMath.max(...numbers))