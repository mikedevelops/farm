import { Container } from 'pixi.js';
import TileFactory from '../factories/TileFactory';

export default class Map extends Container {
    constructor (
        private tileFactory: TileFactory,
        private gameUnit: gameUnit
    ) {
        super();
    }

    /**
     * Spawn a map
     */
    public spawn (
        columns: number,
        rows: number = columns
    ): void {
        // Create map grid
        for (let r = 0; r < rows; r ++) {
            for (let c = 0; c < columns; c++) {
                this.addChild(
                    this.tileFactory.create(
                        this.gameUnit(r),
                        this.gameUnit(c)
                    )
                );
            }
        }
    }
}
