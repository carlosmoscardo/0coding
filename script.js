const saludar = function () {
    console.log(`Hola! Soy ${this.name}`);
}

const person = {
    name: "Juan",
    age: 22,
    saludar,
}

person.saludar();