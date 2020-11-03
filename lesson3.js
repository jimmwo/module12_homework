function createObject() {
	return Object.create(null);
}

const object = createObject();
object.prop = 1;

console.log(object);
