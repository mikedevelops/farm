import { Application, loader, Sprite } from 'pixi.js';
import Tile from './resources/Tile';
import TimeService from './services/TimeService';
import TimeGUI from './gui/TimeGUI';
import * as moment from 'moment';
import FramesPerSecond from './services/FramesPerSecond';
import tileTextures from './assets/tileTextures';
import cursorTextures from './assets/cursorTextures';
import TileFactory from './factories/TileFactory';
import Map from './resources/Map';
import { createGameUnitConverter } from './utils/gameUtilities';
import Level from './resources/Level';
import CursorFactory from './factories/CursorFactory';

import {
    WIDTH,
    HEIGHT,
    DEFAULT_GAME_TIME_START,
    REAL_TIME_START,
    GAME_TIME_MULTIPLIERS,
    GAME_UNIT_SIZE
} from './config';
import Cursor from './resources/Cursor';

// Setup application
const root: HTMLElement = document.getElementById('root');
const application: Application = new Application({
    width: WIDTH,
    height: HEIGHT,
    resolution: 1
});

// Append a PIXI canvas to the root element
root.appendChild(application.view);

// Make our renderer responsive
application.renderer.autoResize = true;

// Load our assets
loader
    .add([
        ...tileTextures,
        ...cursorTextures
    ])
    .load(setup);

// Utilities
const gameUnitConverter = createGameUnitConverter(GAME_UNIT_SIZE);

// Factories
const tileFactory = new TileFactory(
    loader.resources
);

const cursorFactory = new CursorFactory(
    loader.resources
);

// Services
const timeService = new TimeService(
    DEFAULT_GAME_TIME_START,
    REAL_TIME_START,
    GAME_TIME_MULTIPLIERS.default
);
const fps = new FramesPerSecond();

const level = new Level(
    application.renderer
);

const map = new Map(
    tileFactory,
    gameUnitConverter
);

// GUI
const timeGUI = new TimeGUI(
    timeService,
    fps
);

/**
 * Game setup
 */
function setup () {
    // Register cursor
    const cursor: Cursor = cursorFactory.create();

    level.registerCursor(cursor);

    // Create game map
    map.spawn(4);

    application.stage.addChild(map);
    application.stage.addChild(cursor);
    application.stage.addChild(timeGUI);
}

/**
 * Game update
 */

function update (
    dt: number
) {
    // Update internal time
    timeService.update(moment());

    // Update services
    timeGUI.update();
    fps.update(performance.now());

    // Render
    application.renderer.render(application.stage);

    requestAnimationFrame(update.bind(null, timeService.getDeltaTime()));
}

// Start!
update(0);
