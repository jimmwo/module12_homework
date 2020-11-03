function ElectricalApp() {
	this.enabled = false;
	this.powerConsum;
}

ElectricalApp.prototype.plugin = function () {
	this.enabled = true;
	console.log('App is enabled');
};

ElectricalApp.prototype.unplug = function () {
	this.enabled = false;
	console.log('App is disabled');
};

function Computer(power) {
	this.powerConsum = power;
	this.volume = 80;

	this.addVolume = function () {
		if (this.volume < 100) {
			this.volume += 10;
		}
	}

	this.reduceVolume = function () {
		if (this.volume > 0) {
			this.volume -= 10;
		}
	}
}

function Lamp(power) {
	this.powerConsum = power;
	this.luminosity = 50;

	this.addLuminosity = function () {
		if (this.luminosity < 100) {
			this.luminosity += 5;
		}
	}

	this.reduceLuminosity = function () {
		if (this.luminosity > 0) {
			this.luminosity -= 5;
		}
	}
}

Computer.prototype = Lamp.prototype = new ElectricalApp();

const comp = new Computer(1500);
comp.reduceVolume();
comp.unplug();

const lamp = new Lamp(1000);
lamp.plugin();
lamp.addLuminosity();

console.log(comp);
console.log(lamp);
