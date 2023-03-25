class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightStatus();
        console.log('Lights are 100% operational.');
    }
}

let myFirstTrain = new Train('red', false);
console.log(myFirstTrain);

let mySecondTrain = new Train('blue', false);

let train4 = new Train('red', false);
train4.toggleLights();
train4.lightStatus();
train4.getSelf();
train4.getPrototype();

let highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
highSpeed1.toggleLights();