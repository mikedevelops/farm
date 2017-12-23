import Tile from './Tile';
import { watch } from 'fs';
import TileConfig from '../interfaces/TileConfig';
import { Texture } from 'pixi.js';
import Utilities from '../utils/Utilities';
import DebugTextService from '../services/DebugTextService';
import { Moment } from 'moment';

export default class DegradableEntity extends Tile {
    private lifespan: number;

    constructor (
        type: string,
        config: TileConfig,
        x: number,
        y: number,
        width: number,
        height: number,
        texture: Texture,
        utilities: Utilities,
        debugTextService: DebugTextService,
        debug: boolean,
        age: Moment
    ) {
        super(type, config, x, y, width, height, texture, utilities, debugTextService, debug, age);

        this.lifespan = utilities.randomInRange(config.lifespan[0], config.lifespan[1]);
    }

    /**
     * Update entity
     */
    public update (
        dt: number
    ) {
        super.update(dt);

        // Print debug information
        this.printDebugInformation(`l: ${this.lifespan}h`);

        // Check if our entity should be destroyed
        if (this.shouldDestory()) {
            this.destroy();
        }
    }

    /**
     * Determine if an entity should be destroyed
     */
    private shouldDestory (): boolean {
        const age = this.age.clone();
        const born = this.born.clone();

        return age.isAfter(born.add(this.lifespan, 'h'));
    }
}
