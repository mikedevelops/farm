import { DisplayObject, Text } from 'pixi.js';
import TimeService from '../services/TimeService';
import * as pretty from 'pretty-ms';
import FramesPerSecond from '../services/FramesPerSecond';

// @TODO
// - GUI Time Slider

export default class TimeGUI extends Text {
    constructor (
        private timeService: TimeService,
        private fps: FramesPerSecond
    ) {
        super('', {
            fontFamily: 'courier',
            fontSize: 12,
            fill: 0x00ff00,
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
            `fps: ${this.fps.get()}` + '\n' +
            `multiplier: ${this.timeService.getMultiplier()}x`;
    }
}
