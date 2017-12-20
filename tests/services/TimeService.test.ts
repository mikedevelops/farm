import TimeService from '../../src/services/TimeService';
import * as moment from 'moment';
import { Moment } from 'moment';

describe('TimeService', () => {
    let timeService: TimeService;
    const startTime: Moment = moment({ year: 1988, month: 9, date: 3 });
    const realTime: Moment = moment({ year: 2018, month: 1, date: 1 });
    const multiplier: number = 1;

    beforeEach(() => {
        timeService = new TimeService(
            startTime,
            realTime,
            multiplier
        );
    });

    describe('update', () => {
        let currentFrameRealTime: Moment;

        beforeEach(() => {
            currentFrameRealTime = realTime.clone();
            // Fast-forward 20ms
            currentFrameRealTime.add(20, 'ms');
        });

        test('should update the delta time', () => {
            timeService.update(currentFrameRealTime);

            expect(timeService.getDeltaTime()).toEqual(20);
        });

        test('should update the game time', () => {
            timeService.update(currentFrameRealTime);

            expect(timeService.getGameTime()).toEqual(startTime.add(20, 'ms'));
        });

        test('should update the real time', () => {
            timeService.update(currentFrameRealTime);

            expect(timeService.getRealTime()).toEqual(realTime.add(20, 'ms'));
        });

        test('should update the real elapsed time', () => {
            timeService.update(currentFrameRealTime);

            expect(timeService.getRealElapsedTime()).toEqual(20);
        });
    });
});
