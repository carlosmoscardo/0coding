const test = {
    name: "John",
    age: 23,
    arr: [1, 2, 3],
    saludar() {
        console.log("Hey!");
    },
    despedir: function () {
        console.log("Bye!");
    },
    test(number1, number2) {
        console.log(number1 + number2);
    }
}

test.despedir();
test.saludar();
test.test(1, 2);