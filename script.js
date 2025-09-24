// Crea una función constructora Animal que reciba species y tenga un método describe() que diga "Soy un [species]".

function Animal(specie) {
    this.species = specie;
    this.describe = function () {
        console.log(`Soy un ${this.species}`);
    }
}

const tiger = new Animal("Tiger");
tiger.describe();