import Tile from '../Tile';
import { Texture } from 'pixi.js';
import Utilities from '../../utils/Utilities';
import DebugTextService from '../../services/DebugTextService';
import { Moment } from 'moment';
import DegradableEntity from '../DegradableEntity';
import TileConfig from '../../interfaces/TileConfig';

export default class Earth extends Tile {
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
        super(
            type,
            config,
            x,
            y,
            width,
            height,
            texture,
            utilities,
            debugTextService,
            debug,
            age
        );
    }
}
