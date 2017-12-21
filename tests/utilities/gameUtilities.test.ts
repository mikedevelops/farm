import { createGameUnitConverter } from '../../src/utils/gameUtilities';

describe('gameUtilities', () => {
    describe('gameUnit', () => {
        test('should multiply units by game unit size', () => {
            const gameUnit = createGameUnitConverter(10);

            expect(gameUnit(10)).toEqual(100);
        });
    });
});
