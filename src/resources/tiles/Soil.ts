import Tile from '../Tile';
import { Texture, Text } from 'pixi.js';
import { Moment } from 'moment';
import DebugTextService from '../../services/DebugTextService';

export default class Soil extends Tile {
    constructor (
        x: number,
        y: number,
        width: number,
        height: number,
        texture: Texture,
        debugTextService: DebugTextService,
        debug: boolean
    ) {
        super(x, y, width, height, texture, debugTextService, debug);
    }
}
