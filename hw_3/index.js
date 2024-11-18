'use strict'

// Task 1

function recursiveOddSumTo(number) {
  const isNumberCorrect = typeof number === 'number' && !isNaN(number) && number >= 0;

  if (!isNumberCorrect) {
    return 0;
  }

  let validatedNumber = number;
  if (number % 2 === 0) {
    validatedNumber = number - 1;
  }

  return validatedNumber + recursiveOddSumTo(validatedNumber - 2); 
};

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(10));
console.log(recursiveOddSumTo('ghgjf'));

// Task 2

function iterativeOddSumTo(number) {
  let result = 0;

  const isNumberCorrect = typeof number === 'number' && !isNaN(number) && number >= 0;

  if (!isNumberCorrect) {
    return `${number} isn't correct`;
  }

  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      result += i;
    }
  }

  return result;
};
    
console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(10));
console.log(iterativeOddSumTo(-10));