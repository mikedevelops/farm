import { Sprite, Texture, loaders } from 'pixi.js';
import { GAME_UNIT_SIZE } from '../config';

// TODO
// 1. Make Tile seletable

export default class Tile extends Sprite {
    constructor (
        x: number,
        y: number,
        width: number,
        height: number,
        texture: Texture
    ) {
        super(texture);

        // Set position
        this.setTransform(x, y);

        // Set dimensions
        this.width = width;
        this.height = height;
    }
}
