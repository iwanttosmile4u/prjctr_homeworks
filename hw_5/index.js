'use strict'

// Task 1

const durationBetweenDates = ((startDate = '1 Jan 2023', endDate = '31 Dec 2023', size = 'days') => {
  const dateObj1 = new Date(startDate).getTime();
  const dateObj2 = new Date(endDate).getTime();

  const dateSubtraction = Math.abs(dateObj1 - dateObj2);

  const timeInSeconds = dateSubtraction / 1000; 
  const timeInMinutes = timeInSeconds / 60; 
  const timeInHours = timeInMinutes / 60;
  const timeInDays = timeInHours / 24;

  switch(size) {
    case 'seconds': 
      return `${timeInSeconds} ${size}`;
    case 'minutes': 
      return `${timeInMinutes} ${size}`;
    case 'hours':
      return `${timeInHours} ${size}`;
    case 'days':
      return `${timeInDays} ${size}`;
    default:
      return `Please, enter correct date size value - seconds, minutes, hours or days!`;
  }
})

const result = durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'); 
console.log(result);

// Task 2

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

const optimizer = (data) => {
	const result = {};

  for (const key in data) {
    result[key.toLowerCase()] = Number(data[key]).toFixed(2);
  }

  return result;
};

const updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);
