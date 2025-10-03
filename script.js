function unique(arr) {
    return arr.reduce((acc, val) => {
        if (!acc.includes(val)) {
            acc.push(val);
        }
        return acc;
    }, []);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings)); // Hare, Krishna, :-O
