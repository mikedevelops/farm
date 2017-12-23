import DegradableEntity from '../../src/resources/DegradableEntity';
import TileConfig from '../../src/interfaces/TileConfig';
import { BaseTexture, Texture, Container, DisplayObject } from 'pixi.js';
import Utilities from '../../src/utils/Utilities';
import createMockInstance from 'jest-create-mock-instance';
import DebugTextService from '../../src/services/DebugTextService';
import { Moment } from 'moment';
import * as moment from 'moment';

describe('DegeadableEntity', () => {
    let degradableEntity: DegradableEntity;
    let utilitiesMock: jest.Mocked<Utilities>;
    let debugTextServiceMock: jest.Mocked<DebugTextService>;
    let container: Container;
    const born: Moment = moment('30-10-1988', 'dd:mm:yyyy');
    const config: TileConfig = {
        lifespan: [1, 1]
    };

    beforeEach(() => {
        utilitiesMock = createMockInstance(Utilities);
        debugTextServiceMock = createMockInstance(DebugTextService);
        container = new Container();
        degradableEntity = new DegradableEntity(
            'tile_test',
            config,
            1,
            1,
            5,
            5,
            new Texture(new BaseTexture()),
            utilitiesMock,
            debugTextServiceMock,
            false,
            born
        );
    });

    describe('update', () => {
        beforeEach(() => {
            utilitiesMock.randomInRange.mockReturnValue(0);
            degradableEntity = new DegradableEntity(
                'tile_test',
                config,
                1,
                1,
                5,
                5,
                new Texture(new BaseTexture()),
                utilitiesMock,
                debugTextServiceMock,
                false,
                born
            );
            container.addChild(degradableEntity);
        });

        afterEach(() => {
            container.children.forEach((c: DisplayObject) => c.destroy());
        });

        test('should degrade once its lifespan has elapsed', () => {
            // Add _a lot_ of time to the entity
            degradableEntity.update(1);
            expect(container.children.length).toEqual(0);
        });
    });
});
