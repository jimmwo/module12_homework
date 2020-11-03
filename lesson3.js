function checkHasProperty(property, object) {
	return property in object;
}

const object = Object.create({protoProp: 'protoProperty'});
object.ownProp = 'ownProperty';

console.log(checkHasProperty('protoProp', object));
