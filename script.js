function Person(name) { // las funciones constructoras se escriben en mayúscula
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
    }
}

const frankie = new Person("Frankie");
frankie.introduceSelf();