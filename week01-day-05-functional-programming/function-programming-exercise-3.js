function isEven(num) {
    return (num % 2) === 0;
}
function sortNumbers(a, b) {
    if (a < b) {
        return -1;
    }
    if (a === b) {
        return 0;
    }
    return 1;
}
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = list
    .reverse()
    .filter(isEven)
    .sort(sortNumbers);
console.log(result);