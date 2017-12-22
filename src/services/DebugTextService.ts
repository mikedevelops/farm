import { Text } from 'pixi.js';

export default class DebugTextService extends Text {
    constructor (
        text: string = '',
        size: number = 10
    ) {
        super(text, {
            fontFamily: 'courier',
            fontSize: size,
            fill: 0xffffff,
            align: 'left'
        });

        this.x = 4;
        this.y = 2;
    }

    public update (
        text: string
    ) {
        this.text = text;
    }
}
