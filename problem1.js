// Problem 1: Reverse a String

function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

const string = "Hello";
const reverseString = reverse(string);
console.log(reverseString);
