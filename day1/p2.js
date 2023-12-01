const fs = require('fs');

const input = fs.readFileSync('input.txt').toString('utf-8').split('\n');

const wordsAsDigits = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

let sum = 0
input.forEach((line) => {
  // Returns an array if any digit or 'word' matches
  let nums = line.match(/\d|one|two|three|four|five|six|seven|eight|nine/g);

  if (nums[0] in wordsAsDigits) {
    nums[0] = wordsAsDigits[nums[0]];
  }
  if (nums[nums.length - 1] in wordsAsDigits) {
    nums[nums.length - 1] = wordsAsDigits[nums[nums.length - 1]];
  }

  let num = nums[0] + nums[nums.length - 1];
  console.log(num);
  sum += +num;
})

console.log(sum);
