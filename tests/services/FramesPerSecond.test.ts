import FramesPerSecond from '../../src/services/FramesPerSecond';

describe('FramesPerSecond', () => {
    let fps: FramesPerSecond;

    beforeEach(() => {
        fps = new FramesPerSecond();
    });

    describe('update', () => {
        test('should set the frames per second', () => {
            fps.update(16.6);

            expect(fps.get()).toEqual(60);
        });
    });
});
