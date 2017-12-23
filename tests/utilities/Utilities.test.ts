import Utilities from '../../src/utils/Utilities';

describe('Utilities', () => {
    let utilities: Utilities;
    const config = {
        GAME_UNIT_SIZE: 10
    };

    beforeEach(() => {
        utilities = new Utilities(config);
    });

    describe('getGameUnits', () => {
        test('should multiply units by game unit size', () => {
            expect(utilities.getGameUnits(10)).toEqual(100);
        });
    });

    describe('randomInRange', () => {
        test('should return a random number within an inclusive range', () => {
            const min = 1;
            const max = 5;
            const random = utilities.randomInRange(min, max);

            expect(random).toBeGreaterThanOrEqual(min);
            expect(random).toBeLessThanOrEqual(max);
        });
    });
});
