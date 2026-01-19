// Problem 8: Capitalize First Letter of Each Word

const str = "hey! my name is nilandu";
let words = str.split(" ");

let result = [];
let string = "";
//   console.log(words)
//   console.log(str.slice(1))

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  result.push(word[0].toUpperCase() + word.slice(1));
}

string = result.join(" ");
console.log(string);
