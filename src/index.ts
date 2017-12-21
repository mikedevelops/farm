import { Application, loader, Sprite } from 'pixi.js';
import assets from './services/assetCollection';
import Tile from './resources/Tile';
import TimeService from './services/TimeService';
import TimeGUI from './gui/TimeGUI';
import * as moment from 'moment';
import FramesPerSecond from './services/FramesPerSecond';

// Game constants
const WIDTH = 512;
const HEIGHT = 512;
const DEFAULT_GAME_TIME_START = moment({ year: 1988, month: 9, date: 3 });
const REAL_TIME_START =  moment();
const GAME_TIME_MULTIPLIERS = {
    // 1440 (24h) / 3 = 480x
    default: 2880
};

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
    .add(assets)
    .load(setup);

// Services
const timeService = new TimeService(
    DEFAULT_GAME_TIME_START,
    REAL_TIME_START,
    GAME_TIME_MULTIPLIERS.default
);
const fps = new FramesPerSecond();

// GUI
const timeGUI = new TimeGUI(
    timeService,
    fps
);

/**
 * Game setup
 */
function setup () {
    console.log('* SETUP');

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
