import FramesPerSecondService from '../../src/services/FramesPerSecondService';

describe('FramesPerSecondService', () => {
    let fps: FramesPerSecondService;

    beforeEach(() => {
        fps = new FramesPerSecondService();
    });

    describe('update', () => {
        test('should set the frames per second', () => {
            fps.update(16.6);

            expect(fps.get()).toEqual(60);
        });
    });
});
