import { Sprite, Texture, loaders } from 'pixi.js';
import { GAME_UNIT_SIZE } from '../config';
import { Moment } from 'moment';
import * as pretty from 'pretty-ms';
import DebugTextService from '../services/DebugTextService';
import Utilities from '../utils/Utilities';
import TileConfig from '../interfaces/TileConfig';

export default class Tile extends Sprite {
    protected age: Moment;

    constructor (
        private type: string,
        private config: TileConfig,
        x: number,
        y: number,
        width: number,
        height: number,
        texture: Texture,
        private utilities: Utilities,
        private debugTextService: DebugTextService,
        private debug: boolean,
        protected born: Moment
    ) {
        super(texture);

        // Set position
        this.setTransform(x, y);

        // Set dimensions
        this.width = width;
        this.height = height;

        // Interaction
        this.interactive = true;

        // Set DOB
        this.age = born;

        // ! Debug time
        if (this.debug) {
            this.addChild(this.debugTextService);
            this.printDebugInformation();
        }
    }

    public update (
        dt: number
    ): void {
        // Update age
        this.age = this.age.clone().add(dt, 'ms');

        // ! Debug
        if (this.debug) {
            this.printDebugInformation();
        }
    }

    /**
     * Get age as milliseconds
     */
    public getAge (): number {
        return this.age.valueOf() - this.born.valueOf();
    }

    /**
     * Print debug information
     */
    public printDebugInformation (
        debugInformation: string = ''
    ): void {
        const debug: string = this.type + '\n' +
            'a: ' + pretty(this.getAge(), { compact: true }) + '\n' +
            debugInformation;

        this.debugTextService.update(debug);
    }
}
