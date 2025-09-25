function camelize(str) {
    return str.split("-").map((val, idx) => {
        if (idx === 0) {
            return val;
        } else {
            return (val[0].toUpperCase() + val.slice(1));
        }
    }).join("");
}

console.log(camelize("background-color")); // == 'backgroundColor'
console.log(camelize("list-style-image")); // == 'listStyleImage'
console.log(camelize("-webkit-transition")); // == 'WebkitTransition'
// That is: removes all dashes, each word after dash becomes uppercased.