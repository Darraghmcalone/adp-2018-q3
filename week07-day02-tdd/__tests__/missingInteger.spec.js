const { missingInteger } = require('../lib/missingInteger');

describe('missingInteger()', () => {
    describe('when parameter is not an array', () => {
        it('should return undefined', () => {
            expect(missingInteger(999)).not.toBeDefined();
        });
    });
    describe('when parameter is empty array', () => {
        it('should return undefined', () => {
            expect(missingInteger([])).not.toBeDefined();
        });
    });
    describe('when parameter is an array', () => {
        describe('when there are no missing positive integers in the array', () => {
            it('should return undefined', () => {
                expect(missingInteger([2, 4, 3, 1])).not.toBeDefined();
            });
        });
        describe('when there is one missing positive integer', () => {
            it('should return the missing positive integer', () => {
                expect(missingInteger([1, 4, 3])).toEqual(2);
            });
        });
        describe('when there is more than one missing positive integer', () => {
            it('should return the first missing positive integer', () => {
                expect(missingInteger([1, 4, 3, 6])).toEqual(2);
            });
        });
        describe('when a number is repeated and there is a missing positive integer', () => {
            it('should return the first missing positive integer', () => {
                expect(missingInteger([1, 2, 2, 4])).toEqual(3);
            });
        })
    });
});
