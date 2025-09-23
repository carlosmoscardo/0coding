// Crea un objeto phone = { brand: "Samsung", model: "S22" } y recórrelo con un for..in mostrando cada clave y su valor.

const phone = {
    brand: "Samsung",
    model: "S22",
}

for (let key in phone) {
    console.log(`${key}: ${phone[key]}`);
}