import { DisplayObject, Text } from 'pixi.js';
import TimeService from '../services/TimeService';

export default class TimeGUI extends Text {
    constructor (
        private timeService: TimeService
    ) {
        super('', {
            fontFamily: 'courier',
            fontSize: 12,
            fill: 0xffffff,
            align: 'left'
        });

        // Set position
        this.position.set(4, 2);
        // Set text
        this.text = `${this.printDeltaTime()}\n${this.printGameTime()}`;
    }

    public update (): void {
        this.text = `${this.printDeltaTime()}\n${this.printGameTime()}`;
    }

    private printDeltaTime (): string {
        return `dt: ${this.timeService.getDeltaTime()}`;
    }

    private printGameTime (): string {
        return `gt: ${this.timeService.getTime().toString()}`;
    }
}
