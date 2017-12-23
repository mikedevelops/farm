export default class Utilities {
    constructor (
        private config: any
    ) {}

    /**
     * Convert to game units
     */
    public getGameUnits (
        unit: number
    ) {
        return unit * this.config.GAME_UNIT_SIZE;
    }

    /**
     * Get a random while number within a range (inclusive)
     */
    public randomInRange (
        min: number,
        max: number
    ): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
