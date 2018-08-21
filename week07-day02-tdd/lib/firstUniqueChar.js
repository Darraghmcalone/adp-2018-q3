/**
 * @description Check for first unique character in an array
 * @returns {Boolean} 
 */

function firstUniqueChar(input) {
    if (input.length === 1) {
        return input;
    }
    if (input.length === 2) {
        if (input[0] !== input[1]) {
            return input[0];
        } else {
            return undefined;
        }
    }
    const charCounts = {};
    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];

        if (charCounts[currentChar]) {
            charCounts[currentChar]++
        } else {
            charCounts[currentChar] = 1;
        }
        
    }
}
module.exports = {
    firstUniqueChar
};



