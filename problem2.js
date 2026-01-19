// Problem 2: Count Vowels in a String

function countStr(str) {
  let count = 0;
  let vowels = "AEIOUaeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

const string = "NilAndu";
const totalVowels = countStr(string);

console.log(totalVowels);
