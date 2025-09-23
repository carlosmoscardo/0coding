let fruit = prompt("Which food do you want to buy?", "apple");
let bag = {
    [fruit]: 5,
    [fruit + "Computers"]: 1
}
console.log(bag.apple); // does work
console.log(bag["apple"]); // does work
console.log(bag.appleComputers); // does work
console.log(bag["appleComputers"]); // does work

let newFruit = "banana";
let newBag = {
    newFruit: 10, // does not work
    [newFruit]: 10, // does work
}
console.log(newBag.banana);
