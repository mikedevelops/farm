export default class TimeService {
    private time: number;
    private dt: number;
    private previousTime: number;

    constructor () {
        this.time = Date.now();
        this.previousTime = 0;
        this.dt = 0;
    }

    /**
     * Update time
     * @param time
     */
    public update (
        time: number
    ): void {
        this.previousTime = this.time;
        this.time = time;
    }

    /**
     * Get the delta time, the difference in ms between
     * the current and previous frame
     */
    public getDeltaTime (): number {
        return this.time - this.previousTime;
    }

    /**
     * Get a Date object of the current time
     */
    public getTime (): Date {
        return new Date(this.time);
    }
}
