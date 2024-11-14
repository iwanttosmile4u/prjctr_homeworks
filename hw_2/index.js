'use strict'

//Task 1

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('ЛолКек');
  } else if (i % 3 === 0) {
    console.log('Лол');
  } else if (i % 5 === 0) {
    console.log('Кек');
  }  else {
    console.log(i);
  }
}

//Task 2

//Case 1.

const userValue = +prompt('Enter your number:'); 

//Using for loop

if (userValue) {
  for (let i = 2; i < userValue; i+=2) {
      console.log(i);
  }
} else {
  console.log('Таке чуство шо Бог десь наказує нас за шось');
}

//Using while loop

if (userValue) {
  let counter = 2;

  while(counter < userValue) {
    console.log(counter);
    counter+=2;
  }
} else {
  console.log('Таке чуство шо Бог десь наказує нас за шось');
}

//Case 2. 
//If we save own value in variable and don't use prompt, we need to check if this value is a number.
//In this case my answer will be next:
 
const value = 12; 
const valueIsNumber = typeof value === 'number' && !isNaN(value);

//Using for loop

if (valueIsNumber) {
  for (let i = 2; i < value; i+=2) {
      console.log(i);
  }
} else {
  console.log('Таке чуство шо Бог десь наказує нас за шось');
}

//Using while loop

if (valueIsNumber) {
  let counter = 2;

  while(counter < value) {
    console.log(counter);
    counter+=2;
  }
} else {
  console.log('Таке чуство шо Бог десь наказує нас за шось');
}