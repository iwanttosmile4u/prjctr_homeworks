'use strict'

// для елементу з текстом 'Навігація по DOM дереву'
const domNavigationHeader = document.getElementById('headerTwo');
console.log(domNavigationHeader);

// для першого елементу <section>
const firstSection = document.getElementsByTagName('section');
console.log(firstSection);

// для елементу списку з текстом 'Пункт 5'
const listItem5 = document.querySelector('li:nth-child(5)');
console.log(listItem5);

// для елементу з класом 'hatredLevelBlock'
const divBlock = document.getElementsByClassName('hatredLevelBlock');
console.log(divBlock);