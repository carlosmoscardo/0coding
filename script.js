// Data primitives
let number = 1;
let other = number;

number = 2;

console.log(number, other); // 2, 1: Data primitives crean copias.

// Objects
const obj = {data: 42};
const test = obj;

test.data = 43;

console.log(obj.data, test.data); // 43, 43: Objects funcionan con referencias.