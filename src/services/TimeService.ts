import { Moment } from 'moment';

export default class TimeService {
    private realElapsedTime: number;
    private gameTime: Moment;
    private previousFrameTime: Moment;
    private dt: number;

    constructor (
        startTime: Moment,
        private realTime: Moment,
        private multiplier: number
    ) {
        this.gameTime = startTime;
        this.previousFrameTime = startTime;
        this.dt = 0;
        this.realElapsedTime = 0;
    }

    /**
     * Update current time and previous frame time
     */
    public update (
        currentFrameRealTime: Moment
    ): void {
        // determine the difference in ms between the last and current frame
        this.dt = currentFrameRealTime.valueOf() - this.realTime.valueOf();
        // increment the game time by the delta time, this will mean that
        // game time is not relative to FPS. We'll multiply the delta by our
        // game time mulltiplier at this point
        this.gameTime = this.gameTime.add(
            this.getGameDeltaTime(this.dt),
            'ms'
        );
        // update real time
        this.realTime = currentFrameRealTime;
        this.realElapsedTime += this.dt;
    }

    /**
     * Convert delta time to in-game delta time
     */
    public getGameDeltaTime (
        dt: number
    ): number {
        return dt * this.multiplier;
    }

    /**
     * Update game time multiplier
     */
    public updateMultiplier (
        multiplier: number
    ): void {
        this.multiplier = multiplier;
    }

    /**
     * Get the current time object
     */
    public getGameTime (): Moment {
        return this.gameTime;
    }

    /**
     * Get the real time
     */
    public getRealTime (): Moment {
        return this.realTime;
    }

    public getRealElapsedTime (): number {
        return this.realElapsedTime;
    }

    /**
     * Get the delta time
     */
    public getDeltaTime (): number {
        return this.dt;
    }

    /**
     * Get the time mulitplier
     */
    public getMultiplier (): number {
        return this.multiplier;
    }
}
