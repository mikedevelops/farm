import Tile from '../Tile';
import { Texture, Text } from 'pixi.js';
import { Moment } from 'moment';
import DebugTextService from '../../services/DebugTextService';
import Utilities from '../../utils/Utilities';
import TileConfig from '../../interfaces/TileConfig';
import DegradableEntity from '../DegradableEntity';

export default class Soil extends DegradableEntity {
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
    }
}
