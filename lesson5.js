class ElectricalApp {
	constructor(power) {
		this.enabled = false;
		this.powerConsum = power;
	}

	plugin() {
		this.enabled = true;
		console.log('App is enabled');
	};

	unplug() {
		this.enabled = false;
		console.log('App is disabled');
	};
}

class Computer extends ElectricalApp {
	constructor(power) {
		super(power);
		this.volume = 80;
	}


	addVolume() {
		if (this.volume < 100) {
			this.volume += 10;
		}
	}

	reduceVolume() {
		if (this.volume > 0) {
			this.volume -= 10;
		}
	}
}

class Lamp extends ElectricalApp {
	constructor(power) {
		super(power);
		this.luminosity = 50;
	}

	addLuminosity() {
		if (this.luminosity < 100) {
			this.luminosity += 5;
		}
	}

	reduceLuminosity() {
		if (this.luminosity > 0) {
			this.luminosity -= 5;
		}
	}
}

const comp = new Computer(1500);
comp.reduceVolume();
comp.unplug();

const lamp = new Lamp(1000);
lamp.plugin();
lamp.addLuminosity();

console.log(comp);
console.log(lamp);
