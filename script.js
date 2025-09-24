let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    let avgAge = 0;
    arr.map(val => avgAge += val.age);
    return avgAge / 3;
} 

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
