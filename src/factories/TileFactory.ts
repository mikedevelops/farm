import { loaders } from 'pixi.js';
import Tile from '../resources/Tile';
import Soil from '../resources/tiles/Soil';
import { GAME_UNIT_SIZE } from '../config';
import TileDictionary from '../interfaces/TileDictionary';
import { Moment } from 'moment';
import * as moment from 'moment';
import Factory from '../interfaces/Factory';
import DebugTextService from '../services/DebugTextService';

export default class TileFactory implements Factory {
    constructor (
        private resources: loaders.ResourceDictionary
    ) {}

    /**
     * Create a Tile instance
     */
    public create (
        x: number,
        y: number,
        type: string = 'default',
        debug: boolean = true
    ) {
        const tileDictionary: TileDictionary = {
            default: {
                texture: 'tile_default',
                entity: Tile
            },
            soil: {
                texture: 'tile_soil',
                entity: Soil
            }
        };

        return new tileDictionary[type].entity(
            x,
            y,
            GAME_UNIT_SIZE,
            GAME_UNIT_SIZE,
            this.resources[tileDictionary[type].texture].texture,
            new DebugTextService(),
            debug
        );
    }
}
