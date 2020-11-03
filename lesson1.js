function printOwnProperties(object) {
	for (let property in object) {
		if (object.hasOwnProperty(property)) {
			console.log(property, object[property]);
		}
	}
}

const property = Object.create({protoProp: 'protoProperty'});
property.ownProp = 'ownProperty';
printOwnProperties(property);
