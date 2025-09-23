let codes = {
    33: "France",
    31: "Spain",
    1: "USA",
    49: "Germany",
}

for (let key in codes) {
    console.log(key); // 1, 31, 33, 49 => does NOT follow order
}

let newCodes = {
    "+33": "France",
    "+31": "Spain",
    "+1": "USA",
    "+49": "Germany",
}

for (let key in newCodes) {
    console.log(key); // +33, +31, +1, +49 => does respect order
}