import { GAME_UNIT_SIZE } from '../config';

/**
 * Convert units to game units
 */
export function createGameUnitConverter (
    gameUnitSize: number
) {
    return (unit: number): number => unit * gameUnitSize;
}
