// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    let i = 0;
    for (let key in obj) {
        if (key in obj === true) {
            console.log(false);
            i++;
        } 
    }
    if (i === 0) {
        console.log(true);
    }
}

let test = {};

isEmpty(test);