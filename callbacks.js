class Clock {
    constructor() {
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        let date = new Date();
    
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
        //setInterval(this._tick, 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        //let time = ${this.hours}:${this.minutes):${this.seconds}
        let time = [this.hours, this.minutes, this.seconds].join(':');
        console.log(time);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        
        this.incrementSeconds()
        this.printTime();
    }

    incrementSeconds(){
        this.seconds++;
        if (this.seconds === 60){
            this.seconds = 0;
            this.incrementMinutes();
        }
    }

    incrementMinutes(){
        this.minutes++;
        if (this.minutes === 60) {
            this.minutes = 0;
            this.incrementHours();
        }
    }

    incrementHours(){
        this.hours++;
        if (this.hours === 24) {
            this.hours = 0;
        }
    }
}

clock = new Clock() 
//console.log(clock)