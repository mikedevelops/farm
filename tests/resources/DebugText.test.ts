import DebugTextService from '../../src/services/DebugTextService';
import { debug } from 'util';

describe('DebugTextService', () => {
    let debugTextService: DebugTextService;

    beforeEach(() => {
        debugTextService = new DebugTextService('test');
    });

    describe('update', () => {
        test('should update the text', () => {
            debugTextService.update('updated');

            expect(debugTextService.text).toEqual('updated');
        });
    });
});
