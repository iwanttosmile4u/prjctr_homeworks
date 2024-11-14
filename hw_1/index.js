'use strict'

// Task 1

const number1 = 10;
const number2 = 20;

const sum = number1 + number2;
console.log(sum);

const subtraction = number1 - number2;
console.log(subtraction);

const multiplication = number1 * number2;
console.log(multiplication);

const division = number1 / number2;
console.log(division);

const exponentiationResult = number1 ** 2;
console.log(exponentiationResult);

const squareRoot = number2 ** 0.5;
const squareRootResult = parseFloat(squareRoot.toFixed(2));
console.log(squareRootResult);

// Task 2

const varValue = 2024;

const stringResult = `${varValue}`;
console.log(`Type of ${varValue} is ${typeof stringResult}`);

const numberResult = parseInt(stringResult);
console.log(`Type of ${stringResult} is ${typeof numberResult}`);

const booleanResult = Boolean(varValue);
console.log(`Type of ${varValue} is ${typeof booleanResult}`);