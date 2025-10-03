// function camelize(str) {
//     return str
//         .split("-")
// }

// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

let str = "camel-case";
let result = str.split("-");
console.log(result);
