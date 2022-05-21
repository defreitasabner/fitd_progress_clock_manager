import Clock from './Clock';

class ClockController {
    
    private clocks: Clock[];

    constructor(clocks: Clock[]) {
        this.clocks = clocks;
    }

    get getClocks() {
        return this.clocks;
    }

    set setClocks(newClocksList: object[]) {
        newClocksList.forEach(clock => this.postNewClock(clock))
    }

    // Need to improve
    setClockId(): number {
        if(this.clocks.length === 0) {
            return 1;
        } else {
            const newClockId = this.clocks.length + 1;
            return newClockId;
        }
    }

    postNewClock({clockTitle, clockSize, clockTags, clockProgressLevel}: any): void {
        let repeatedName = false;
        this.clocks.forEach(clock => clock.clockTitle === clockTitle? repeatedName = true : repeatedName = false);
        if (!repeatedName) {
            const newClock = new Clock(this.setClockId(), clockTitle, clockSize, clockTags, clockProgressLevel);
            this.clocks.push(newClock);
            console.log('New Clock was created');
        } else {
            console.log('Error: Clocks could have the same Title.')
        }
    }

    

    
}

export default ClockController;