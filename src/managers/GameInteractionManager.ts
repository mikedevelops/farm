import { interaction, WebGLRenderer, CanvasRenderer, DisplayObject } from 'pixi.js';
import Tile from '../resources/Tile';
import Cursor from '../resources/Cursor';
import Spawner from '../services/SpawnerService';
import Map from '../resources/Map';

export default class GameInteractionManager extends interaction.InteractionManager {
    private map: Map;
    private gameCursor: Cursor;
    private activeTile: Tile;

    constructor (
        renderer: WebGLRenderer | CanvasRenderer,
        private spawner: Spawner
    ) {
        super(renderer);

        this.on('mousedown', this.handleClick);
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
     * Add map to level
     */
    public registerMap (
        map: Map
    ): void {
        this.map = map;
    }

    /**
     * Handle mouse move events
     */
    private handleMousemove (
        event: interaction.InteractionEvent
    ): void {
        const focussedObject = this.hitTest(event.data.global);

        // If the cursor is over a tile
        if (focussedObject instanceof Tile) {
            // Set the current active tile
            this.activeTile = focussedObject;

            // Position the cursor over the tile
            this.gameCursor.updatePosition(
                this.activeTile.worldTransform.tx,
                this.activeTile.worldTransform.ty
            );
        } else {
            this.activeTile = null;
        }
    }

    private handleClick (
        event: interaction.InteractionEvent
    ): void {
        // If the cursor is over a tile
        if (this.activeTile !== null) {
            // Spawn a tile
            const { x, y } = this.activeTile;
            const soil: Tile = this.spawner.spawn('soil', [x, y, 'soil']);

            this.map.addChild(soil);
        }
    }
}
