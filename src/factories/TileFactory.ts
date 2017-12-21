import { loaders } from 'pixi.js';
import Tile from '../resources/Tile';
import { GAME_UNIT_SIZE } from '../config';

export default class TileFactory {
    constructor (
        private resources: loaders.ResourceDictionary
    ) {}

    /**
     * Create a Tile instance
     */
    public create (
        x: number,
        y: number,
        resourceName: string = 'tile_default',
    ) {
        return new Tile(
            x,
            y,
            GAME_UNIT_SIZE,
            GAME_UNIT_SIZE,
            this.resources[resourceName].texture
        );
    }
}
