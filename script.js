let user = {
    firstName: "John",
    secondName: "Bret",
    age: 30,
}

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}