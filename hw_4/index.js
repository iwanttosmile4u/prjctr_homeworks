'use strict'

// Task 1

const sortNames = (names) => names.sort();

const getInitials = (people) => {
  const initials = people.map((person) => {
    return person
    .split(' ')
    .map(name => name[0])
    .join('.') + '.';
  })

  return sortNames(initials);
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

const reverseNumber = (number) => {
  const result = String(number).split('').reverse().join('');
  
  return +result;
}

console.log(reverseNumber(4589));

// Task 4

const uniteArray = (array) => array.flat(Infinity);

const multiplyArrayNumbers = (array) => {

  return uniteArray(array).reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
}

const resultsArray = [1, 2, [3, [4], [5]]];
console.log(multiplyArrayNumbers(resultsArray));
