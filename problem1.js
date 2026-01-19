// Problem 1: Reverse a String

const string = "Hello";
let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversed = reversed + string[i];
}

console.log(reversed);
