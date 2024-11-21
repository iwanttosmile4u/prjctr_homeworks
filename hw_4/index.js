'use strict'

// Task 1

const getInitials = (people) => {
  const initials = people.map((person) => {
    return person
    .split(' ')
    .map(name => name[0])
    .join('.') + '.';
  })

  return initials.sort();
}

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

console.log(getInitials(userNames)); 


// Task 2

const vowels = ['А', 'О', 'У', 'И', 'І', 'Е', 'Є', 'Ї', 'Ю', 'Я'];

//Case 1 - using for loop and condition

const filterNamesByVowels = (people) => {
  const result = [];

  for (let i = 0; i < people.length; i++) {
    if (vowels.includes(people[i][0])) {
      result.push(people[i]);
    }
  }

  return result;
}

// Case 2 - using array iteration method

const filterNames = (people) => people.filter(person => vowels.includes(person[0]));

const names = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Євгенія', 'Аліна'];

console.log(filterNames(names));
console.log(filterNamesByVowels(names));

// Task 3

const reserseNumber = (number) => {
  const result = String(number).split('').reverse().join('');
  const transformedNumber = +result;

  return transformedNumber;
}

console.log(reserseNumber(4589));

// Task 4

const multiplyNumbers = (array) => {
  const unitedArray = array.flat(Infinity);

  return unitedArray.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
}

const resultsArray = [1, 2, [3, [4], [5]]];
console.log(multiplyNumbers(resultsArray));