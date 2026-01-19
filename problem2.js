// Problem 2: Count Vowels in a String

const string = "NilAndu";
let count = 0;
let vowels = "AEIOUaeiou";

for (let i = 0; i < string.length; i++) {
  if (vowels.includes(string[i])) {
    count++;
  }
}

console.log(count);
