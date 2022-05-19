class Clock {
    
    clockTitle: string;
    clockSize: number;
    clockTags: string[];
    clockProgressLevel: number;


    constructor(clockTitle: string, clockSize: number, clockTags: string[], clockProgressLevel: number) {
        this.clockTitle = clockTitle; 
        this.clockSize = clockSize;
        this.clockTags = clockTags;
        this.clockProgressLevel = clockProgressLevel;
    }
}

export default Clock;