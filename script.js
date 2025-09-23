const persona = {
  name: {
    first: "Ana",
    last: "Martínez"
  }
};

// Añade una propiedad nueva llamada "hobby" con el valor "pintar" al objeto anterior, usando una variable para el nombre de la propiedad.
const ans = "hobby";

persona[ans] = "pintar";

console.log(persona.hobby);
