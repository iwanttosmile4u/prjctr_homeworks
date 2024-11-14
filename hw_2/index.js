'use strict'

//Task1

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

//Task2

const value = +prompt('Enter your number: ');
const valueIsNumber = typeof value === 'number' && !isNaN(value);  

// Using for

if (valueIsNumber) {
  for (let i = 2; i < value; i+=2) {
      console.log(i);
  }
} else {
  console.log('Таке чуство шо Бог десь наказує нас за шось');
}

// Using while

let counter = 2;

while(valueIsNumber && counter < value) {
  console.log(counter);
  counter+=2;
}