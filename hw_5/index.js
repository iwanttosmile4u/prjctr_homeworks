'use strict'

// Task 1

const durationBetweenDates = ((startDate, endDate, size) => {
  if (!startDate || !endDate || !size) {
    throw new Error('Missing arguments!');
  }

  const dateObj1 = new Date(startDate).getTime();
  const dateObj2 = new Date(endDate).getTime();

  const dateSubtraction = Math.abs(dateObj1 - dateObj2);

  switch(size) {
    case 'seconds': 
      return `${dateSubtraction / 1000} ${size}`;
    case 'minutes': 
      return `${dateSubtraction / 1000 / 60} ${size}`;
    case 'hours':
      return `${dateSubtraction / 1000 / 60 / 60} ${size}`;
    case 'days':
      return `${dateSubtraction / 1000 / 60 / 60 / 24} ${size}`;
    default:
      return `Please, enter correct dste size value - seconds, minutes, hours or days!`;
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

  for (const [key, value] of Object.entries(data)) {
    result[key.toLowerCase()] = Number(value).toFixed(2);
  }

  return result;
};

const updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);
