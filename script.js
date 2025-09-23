// Crea un objeto numbers con las claves "2", "1" y "3", en ese orden, con valores "two", "one", "three". Recorre el objeto con for..in y observa el orden real.

const numbers = {
    "2": "two",
    "1": "one",
    "3": "three",
}

for (let key in numbers) {
    console.log(key);
}