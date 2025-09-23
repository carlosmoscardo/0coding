const family = {
    names: ["Ana", "John"],
    ages: [14, 39],
    sayHi() {
        return `Hi my name is ${this.names[0]} and I am ${this.ages[0]}. My father's name is ${this.names[1]} and he's ${this.ages[1]}.`
    },
    direccion: {
        calle: "Calle Castilla",
        numero: 11,
        ciudad: "Madrid",
    },
}

console.log(family.sayHi());