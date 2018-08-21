const { firstUniqueChar } = require('../lib/firstUniqueChar');

describe('firstUniqueChar()', () => {
    describe('when string has length 1', () => {
        it('should return parameter supplied', () => {
            expect(firstUniqueChar('a')).toEqual('a');
        });
    });
    describe('when string has length 2', () => {
        describe('and both letters are different', () => {
            it('should return first letter', () => {
                expect(firstUniqueChar('ab')).toEqual('a');
            });
        });
        describe('and both letters are the same', () => {
            it('should return undefined', () => {
                expect(firstUniqueChar('bb')).not.toBeDefined();
            });
        });
    });
    describe('when string has all unique letters', () => {
        it('should return the first letter', () => {
            expect(firstUniqueChar('abcdefghi')).toEqual('a');
        });
    });
    describe('when string has one unique letter', () => {
        it('should return the unique letter', () => {
            expect(firstUniqueChar('aaabbccccccdeeeeeffffff')).toEqual('d');
        });
    });
    describe('when string has multiple unique letters', () => {
        it('should return the first unique letter', () => {
            expect(firstUniqueChar('aabccccdeffg')).toEqual('b');
        });
    });
    describe('when string has different letters, all repeating', () => {
        it('should return undefined', () => {
            expect(firstUniqueChar('aaabbbbbbddddd')).not.toBeDefined();
        });
    });
});