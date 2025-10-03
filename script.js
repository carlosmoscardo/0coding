function camelize(str) {
    const arr = str.split("-");
    const newArr = arr.map((val, idx) => idx === 0 ? val : val[0].toUpperCase() + val.slice(1));
    const final = newArr.join("");
    return final;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';


