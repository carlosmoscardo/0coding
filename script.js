let user = {
    name: "John",
    "likes birds": true,
}

console.log(user.name); // works
console.log(user.likes birds); // doesn't work
console.log(user["likes birds"]); // works