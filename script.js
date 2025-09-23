const person = {
    name: {
        first: "John",
        last: "Smith",
    },
    age: 31,
}

person.eyes = "brown";
person["height"] = "181cm";
person.sayHi = function () {
    console.log("Hola, hola, hey, hola");
}

person.sayHi();