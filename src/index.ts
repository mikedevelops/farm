import { Application } from 'pixi.js';

// Setup application
const root: HTMLElement = document.getElementById('root');
const application: Application = new Application({
    width: window.innerWidth,
    height: window.innerHeight
});

// Append a PIXI canvas to the root element
root.appendChild(application.view);

// Make our renderer responsive
application.renderer.autoResize = true;

