// Given an array of n integers, returns the minimal positive integer
// (greater than 0) that does not occur in the array.
// For example, given:
//  `[1, 3, 6, 4, 1, 2]`
// The value returned is `5`.
// If no such number exists, return `undefined`.
function missingInteger(numbers) {
    if (!Array.isArray(numbers)) {
        return;
    }
    if (numbers.length === 0) {
        return;
    }
    const sorted = numbers.slice(0).sort();
    const maxNumber = sorted[sorted.length - 1];
    let missing = undefined;

    for (let i = 1; i <= maxNumber; i++) {
        const found = sorted.find((item) => item === i);

        if (found === undefined) {
            missing = i;
            break;
        }
    }

    return missing;
}

module.exports = {
    missingInteger
};