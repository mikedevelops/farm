import { Application, loader, Sprite } from 'pixi.js';
import assets from './services/assetCollection';
import Tile from './resources/Tile';

// Setup application
const root: HTMLElement = document.getElementById('root');
const application: Application = new Application({
    width: 256,
    height: 256,
    resolution: 2
});

// Append a PIXI canvas to the root element
root.appendChild(application.view);

// Make our renderer responsive
application.renderer.autoResize = true;

// Load our assets
loader
    .add(assets)
    .load(setup);

/**
 * Game setup
 */
function setup () {
    console.log('* SETUP');
}

