// Problem 4: Find the Maximum Number

const array = [5, 1, 9, 3];
let max = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(max);
