import { Container } from 'pixi.js';
import TileFactory from '../factories/TileFactory';
import Tile from './Tile';
import Utilities from '../utils/Utilities';

export default class Map extends Container {
    constructor (
        private tileFactory: TileFactory,
        private utilities: Utilities
    ) {
        super();

        this.interactive = true;
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
                        this.utilities.getGameUnits(r),
                        this.utilities.getGameUnits(c)
                    )
                );
            }
        }
    }

    /**
     * Update map tiles
     */
    public update (
        dt: number
    ): void {
        this.children.forEach((t: Tile) => t.update(dt));
    }

    /**
     * Align to center of stage
     */
    public align () {
        const { width, height } = this.utilities.getStageDimensions();

        this.x = (width / 2) - (this.width / 2);
        this.y = (height / 2) - (this.height / 2);
    }
}
