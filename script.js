// Crea un objeto person con propiedades name: "Alice" y age: 25. Usa in para comprobar si existe la propiedad "name" y si existe "surname".

const person = {
    name: "Alice",
    age: 25,
}

console.log("name" in person, "surname" in person);