import { Sprite, Texture, loaders } from 'pixi.js';
import { GAME_UNIT_SIZE } from '../config';
import { Moment } from 'moment';
import * as pretty from 'pretty-ms';
import DebugTextService from '../services/DebugTextService';

// TODO
// - Add debug age Text to each tile

export default class Tile extends Sprite {
    constructor (
        x: number,
        y: number,
        width: number,
        height: number,
        texture: Texture,
        private debugTextService: DebugTextService,
        private debug: boolean,
        private age: number = 0
    ) {
        super(texture);

        // Set position
        this.setTransform(x, y);

        // Set dimensions
        this.width = width;
        this.height = height;

        // Interaction
        this.interactive = true;

        // ! Debug time
        if (this.debug) {
            this.debugTextService.update(pretty(this.age, { compact: true }));
            this.addChild(this.debugTextService);
        }
    }

    public update (
        dt: number
    ): void {
        // Update age
        this.age += dt;

        // ! Debug
        if (this.debug) {
            this.debugTextService.update(pretty(this.age, { compact: true }));
        }
    }
}
