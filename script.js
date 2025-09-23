const person = {
    name: {
        first: "John",
        last: "Smith",
    },
    age: 31,
}

const xyz = "age";

console.log(person.name.first);
console.log(person["name"]["first"]);
console.log(person[xyz]);