import { Application, loader, Sprite } from 'pixi.js';
import assets from './services/assetCollection';
import Tile from './resources/Tile';
import TimeService from './services/TimeService';
import TimeGUI from './gui/TimeGUI';

// Setup application
const root: HTMLElement = document.getElementById('root');
const application: Application = new Application({
    width: 512,
    height: 512,
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
const timeService = new TimeService();

// GUI
const timeGUI = new TimeGUI(
    timeService
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
    requestAnimationFrame(update.bind(null, timeService.getDeltaTime));

    // Update internal time
    timeService.update(Date.now());

    // Update services
    timeGUI.update();

    // Render
    application.renderer.render(application.stage);
}

// Start!
update(0);
