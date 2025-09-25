let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let sorted = arr.slice().sort();
    return sorted;
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)