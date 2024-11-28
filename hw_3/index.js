'use strict'

const isNumber = (userNumber) => typeof userNumber === 'number' && !isNaN(userNumber) && userNumber >= 0;

// Task 1

function recursiveOddSumTo(number) {
  if (!isNumber(number)) {
    return 0;
  }

  if (number % 2 === 0) {
    --number;
  }

  return number + recursiveOddSumTo(number - 2); 
};

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(10));
console.log(recursiveOddSumTo('ghgjf'));

// Task 2

function iterativeOddSumTo(number) {
  let result = 0;

  if (!isNumber(number)) {
    return `${number} isn't correct`;
  }

  for (let i = 1; i <= number; i+=2) {
    result += i;
  }

  return result;
};
    
console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(10));
console.log(iterativeOddSumTo(-10));