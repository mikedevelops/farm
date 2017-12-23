import { loaders } from 'pixi.js';
import Tile from '../resources/Tile';
import Soil from '../resources/tiles/Soil';
import { GAME_UNIT_SIZE } from '../config';
import TileDictionary from '../interfaces/TileDictionary';
import { Moment } from 'moment';
import * as moment from 'moment';
import Factory from '../interfaces/Factory';
import DebugTextService from '../services/DebugTextService';
import Utilities from '../utils/Utilities';
import TimeService from '../services/TimeService';
import Earth from '../resources/tiles/Earth';
import soilConfig from '../config/tiles/soil.config';
import earthConfig from '../config/tiles/earth.config';

export default class TileFactory implements Factory {
    constructor (
        private resources: loaders.ResourceDictionary,
        private utilities: Utilities,
        private timeService: TimeService
    ) {}

    /**
     * Create a Tile instance
     */
    public create (
        x: number,
        y: number,
        type: string = 'earth',
        debug: boolean = true
    ) {
        const tileDictionary: TileDictionary = {
            earth: {
                texture: 'tile_earth',
                entity: Earth,
                config: earthConfig
            },
            soil: {
                texture: 'tile_soil',
                entity: Soil,
                config: soilConfig
            }
        };

        if (tileDictionary[type] === undefined) {
            throw new Error(`Could not find entity type "${type}"`);
        }

        return new tileDictionary[type].entity(
            type,
            tileDictionary[type].config,
            x,
            y,
            GAME_UNIT_SIZE,
            GAME_UNIT_SIZE,
            this.resources[tileDictionary[type].texture].texture,
            this.utilities,
            new DebugTextService(),
            debug,
            this.timeService.getGameTime().clone()
        );
    }
}
