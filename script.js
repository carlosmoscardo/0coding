let car = {
    brand: "Toyota",
    year: 2020,
}

for (let key in car) {
    console.log(`${key} => ${car[key]}`);
}