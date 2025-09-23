let user = {
    firstName: "James",
    age: 30,
    test: undefined,
}

console.log(user.test); // undefined puede dar a entender que la propiedad no existe
console.log("test"in user); // por eso usamos el operador IN

// obj.key te devuelve undefined cuando esa key no existe
// pero si da la casualidad de que justamente una key tiene asociado el valor "undefined", entonces puedes pensar que esa clave no existe cuando realmente sí existe
// en ese tipo de situaciones usamos el operador IN
// la de IN es preguntar directamente si existe la clave en el objeto
// la sintaxis en cuestión es: "clave" in obj
// "clave" siempre en quotes

let animal = {
    type: "dog",
    age: 5,
}

console.log("test" in animal); // false
console.log("type" in animal, "age" in animal); // true true

// Si no queremos poner quotes, podemos usar variables
let example = "age";
console.log(example in animal); // true