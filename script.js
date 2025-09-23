function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}
// =

function makeUser2(name, age) {
    return {
        name,
        age,
    }
}
