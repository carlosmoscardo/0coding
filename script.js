function createObjectPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        console.log(`Hey! I'm ${this.name}`);
    };
    return obj;
}

// Esta función devuelve {}

const juan = createObjectPerson("Juan");
const miguel = createObjectPerson("Miguel");

juan.introduceSelf();
miguel.introduceSelf();
