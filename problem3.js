// Problem 3: Check for Palindrome

// const str = "madam"; 
const str = "nilandu"; 
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}

if (str === reversed) {
  console.log(str, "is palindrome");
} else {
  console.log(str, "is not palindrome");
}
