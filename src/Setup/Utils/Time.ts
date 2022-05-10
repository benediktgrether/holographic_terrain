import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
    start: number;
    current: number;
    elapsed: number;
    delta: number;

    constructor() {
        super();

        // Setup Time
        this.start = Date.now();
        this.current = this.start;
        this.elapsed = 0;
        this.delta = 16;

        window.requestAnimationFrame(() => {
            this.updateAnimationFrame();
        });
    }

    updateAnimationFrame(): void {
        const currentTime: number = Date.now();
        this.delta = currentTime - this.current;
        this.current = currentTime;
        this.elapsed = this.current - this.start;

        this.trigger("updateAnimationFrame");

        window.requestAnimationFrame(() => {
            this.updateAnimationFrame();
        });
    }
}