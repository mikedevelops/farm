import { Sprite, Texture } from 'pixi.js';

// TODO
// 1. Make Tile seletable

export default class Tile extends Sprite {
    constructor (
        texture: Texture
    ) {
        super(texture);
    }
}
