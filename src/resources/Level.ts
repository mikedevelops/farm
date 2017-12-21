import { interaction, WebGLRenderer, CanvasRenderer, DisplayObject } from 'pixi.js';
import Tile from './Tile';
import Cursor from './Cursor';

export default class Level extends interaction.InteractionManager {
    private gameCursor: Cursor;
    private activeTile:  Tile;

    constructor (
        renderer: WebGLRenderer | CanvasRenderer
    ) {
        super(renderer);

        this.on('mousemove', this.handleMousemove);
    }

    /**
     * Add cursor to level
     */
    public registerCursor (
        cursor: Cursor
    ): void {
        this.gameCursor = cursor;
    }

    /**
     * Handle mouse move events
     */
    private handleMousemove (event: interaction.InteractionEvent) {
        const focussedObject = this.hitTest(event.data.global);

        // If the cursor is over a tile
        if (focussedObject instanceof Tile) {
            // Set the current active tile
            this.activeTile = focussedObject;

            // Position the cursor over the tile
            this.gameCursor.updatePosition(
                this.activeTile.x,
                this.activeTile.y
            );
        }
    }
}
