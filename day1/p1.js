const fs = require('fs');

const input = fs.readFileSync('input.txt').toString('utf-8').split('\n');

let sum = 0;
input.forEach((line) => {
  // Remove all non-numeric characters
  let num = line.replace(/\D/g, '');
  
  // Combines the first and last digit, if there is only one digit it duplicates it
  num = num[0] + num[num.length - 1];
  sum += +num;
});

console.log(sum);