// Crea un objeto car con una propiedad cuyo nombre venga de la variable feature = "hasAC" y valor true.

let feature = "hasAC";

let car = {
    [feature]: true,
}

console.log(car.hasAC); // works
console.log(car["hasAC"]); // works