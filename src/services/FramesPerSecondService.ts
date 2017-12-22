export default class FramesPerSecondService {
    private lastFpsReading: number;
    private then: number;
    private fps: number;

    constructor () {
        this.then = 0;
        this.fps = 0;
        this.lastFpsReading = 0;
    }

    /**
     * Calculate FPS
     */
    public update (
        now: number
    ): void {
        this.fps = Math.floor(1 / ((now - this.then) / 1000));
        this.then = now;
    }

    /**
     * Get FPS
     */
    public get (): number {
        return this.fps;
    }
}
