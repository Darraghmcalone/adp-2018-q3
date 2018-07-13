function addOne(num) {
    return num + 1;
}

function isOdd(num) {
    return num % 2 === 1;
}

function multiplyTen(num) {
    return num * 10;
}

const list = [1, 2, 3];
const res0 = list.map(addOne)
    .filter(isOdd)
    .map(multiplyTen);
console.log(res0);

// used later:
function doubleIt(num) {
    return num * 2;
}

// Array.prototype.map()
// ES5:
const res1 = list.map(function (item) {
    return item * 2;
});
console.log(res1);
// ES6/ES2015:
const res2 = list.map((item) => {
    return item * 2;
});
console.log(res2);
// Shorter style:
const res3 = list.map((item) => item * 2);
console.log(res3);
// Using an existing function:
const res4 = list.map(doubleIt);
console.log(res4);

// sum all numbers in the list:
const sum = list.reduce((prev, curr) => prev + curr);
console.log('sum of all numbers in list:', sum);

const numbersForFactorial = [5, 4, 3, 2, 1];
const factorialResult = numbersForFactorial.reduce((prev, curr) => prev * curr);
console.log('factorial of', numbersForFactorial, factorialResult);