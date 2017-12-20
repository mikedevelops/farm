import { DisplayObject, Text } from 'pixi.js';
import TimeService from '../services/TimeService';
import * as pretty from 'pretty-ms';

// @TODO
// - GUI Time Slider

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
        this.update();
    }

    /**
     * Update the GUI
     */
    public update (): void {
        this.text = this.printGameTime();
    }

    /**
     * Format time metrics
     */
    private printGameTime (): string {
        return `gt: ${this.timeService.getGameTime().format()}` + '\n' +
            `rt: ${pretty(this.timeService.getRealElapsedTime())}` + '\n' +
            `dt: ${this.timeService.getDeltaTime()}` + '\n' +
            `multiplier: ${this.timeService.getMultiplier()}x`;
    }
}
