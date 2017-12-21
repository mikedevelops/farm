import { loaders } from 'pixi.js';
import Cursor from '../resources/Cursor';
import { GAME_UNIT_SIZE } from '../config';

export default class CursorFactory {
    constructor (
        private resources: loaders.ResourceDictionary
    ) {}

    /**
     * Create a Tile instance
     */
    public create (
        resourceName: string = 'cursor_default',
    ) {
        return new Cursor(
            GAME_UNIT_SIZE,
            GAME_UNIT_SIZE,
            this.resources[resourceName].texture
        );
    }
}
