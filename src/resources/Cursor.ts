import { Sprite, Texture } from 'pixi.js';

export default class Cursor extends Sprite {
    constructor (
        width: number,
        height: number,
        texture: Texture
    ) {
        super(texture);

        // Set dimensions
        this.width = width;
        this.height = height;
    }

    public updatePosition (
        x: number,
        y: number
    ): void {
        this.x = x;
        this.y = y;
    }
}
