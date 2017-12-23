import { Application, loader, Sprite } from 'pixi.js';
import Tile from './resources/Tile';
import TimeService from './services/TimeService';
import DebugGUI from './gui/DebugGUI';
import * as moment from 'moment';
import FramesPerSecond from './services/FramesPerSecondService';
import tileTextures from './assets/tileTextures';
import cursorTextures from './assets/cursorTextures';
import TileFactory from './factories/TileFactory';
import Map from './resources/Map';
import GameInteractionManager from './managers/GameInteractionManager';
import CursorFactory from './factories/CursorFactory';
import * as config from './config';
import Cursor from './resources/Cursor';
import Spawner from './services/SpawnerService';
import Utilities from './utils/Utilities';

// Setup application
const root: HTMLElement = document.getElementById('root');
const application: Application = new Application({
    width: config.WIDTH,
    height: config.HEIGHT,
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
const utilities = new Utilities(config);

const timeService = new TimeService(
    config.DEFAULT_GAME_TIME_START,
    config.REAL_TIME_START,
    config.GAME_TIME_MULTIPLIERS.default
);

// Factories
const tileFactory = new TileFactory(
    loader.resources,
    utilities,
    timeService
);

const cursorFactory = new CursorFactory(
    loader.resources
);

// Services
const spawner = new Spawner(
    timeService,
    tileFactory
);

const fps = new FramesPerSecond();

const map = new Map(
    tileFactory,
    utilities
);

// Managers
const gameInteractioManager = new GameInteractionManager(
    application.renderer,
    spawner
);

// GUI
const debugGUI = new DebugGUI(
    timeService,
    fps,
    map
);

/**
 * Game setup
 */
function setup () {
    // @TODO
    // - should the level act as a container :thinking:

    // Register cursor
    const cursor: Cursor = cursorFactory.create();

    gameInteractioManager.registerCursor(cursor);

    // Register map
    gameInteractioManager.registerMap(map);

    // Create game map
    map.spawn(config.MAP_SIZE);
    map.align();

    application.stage.addChild(map);
    application.stage.addChild(cursor);
    application.stage.addChild(debugGUI);
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
    debugGUI.update();
    fps.update(performance.now());
    map.update(timeService.getGameDeltaTime(dt));

    // Render
    application.renderer.render(application.stage);
    requestAnimationFrame(update.bind(null, timeService.getDeltaTime()));
}

// Start!
update(0);
