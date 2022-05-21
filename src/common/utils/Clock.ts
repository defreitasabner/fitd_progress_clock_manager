class Clock {

    clockId: number | null;
    clockTitle: string;
    clockSize: number;
    clockTags: string[];
    clockProgressLevel: number;

    constructor(clockId: number | null, clockTitle: string, clockSize: number, clockTags: string[], clockProgressLevel: number) {

        this.clockId = clockId;
        this.clockTitle = clockTitle; 
        this.clockSize = clockSize;
        this.clockTags = clockTags;
        this.clockProgressLevel = clockProgressLevel;
    }
}

export default Clock;