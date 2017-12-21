import Map from '../../src/resources/Map';
import TileFactory from '../../src/factories/TileFactory';
import createMockInstance from 'jest-create-mock-instance';
import { Container, DisplayObject } from 'pixi.js';

describe('map', () => {
    let map: Map;
    let tileFactoryMock: jest.Mocked<TileFactory>;
    let gameUnit: jest.Mock;

    beforeEach(() => {
        tileFactoryMock = createMockInstance(TileFactory);
        gameUnit = jest.fn();
        map = new Map(
            tileFactoryMock,
            gameUnit
        );

        // Return a standard DisplayObject for testing
        tileFactoryMock.create.mockImplementation(() => new DisplayObject());
    });

    describe('spawn', () => {
        test('should create a tile grid', () => {
            map.spawn(2, 5);

            expect(tileFactoryMock.create).toHaveBeenCalledTimes(10);
        });

        test('should add each tile as a child', () => {
            map.spawn(6, 6);

            expect(map.children.length).toBe(36);
        });
    });
});
