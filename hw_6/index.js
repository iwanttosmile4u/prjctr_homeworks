'use strict'

// Task 1

const addThemAll = (...numbers) => {
  let totalSum = 0;

  for(const number of numbers) {
    totalSum += number;
  }

  return totalSum;
}

console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

// Case with reduce: 

const addThemAll2 = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(addThemAll2(2,4)); // 6
console.log(addThemAll2(1,2,3,4)); // 10

// Task 2

const multiply = (a) => {
  return (b) => a * b;
}

//Shorter case with arrow function:

const multiply2 = (a) => (b) => a * b; 


console.log(multiply(5)(5)); // 25
console.log(multiply(2)(-2)); // -4
console.log(multiply(4)(3));  // 12

console.log(multiply2(5)(5)); // 25
console.log(multiply2(2)(-2)); // -4 
console.log(multiply2(4)(3)); // 12

// Task 3

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

const byProperty = (property, direction) => {
	return (key1, key2) => {
    if (direction === '>') {
      return key1[property] - key2[property] || key1[property].localeCompare(key2[property]);
    } else if (direction === '<') {
      return key2[property] - key1[property] || key2[property].localeCompare(key1[property]);
    }
  }
}

console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку

// Task 4

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

const filterUnique = (array) => [...new Set(array)];

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
