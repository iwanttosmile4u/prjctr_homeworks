// 'use strict'

// const taskInput = document.querySelector('.task_input');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const form = document.querySelector('.create-task-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // відключаємо дефолтну поведінку форми, тобто її відправку

//   if(taskInput.ariaValueMax.trim() === '') {
//     return;
//   }

//   createSingleTaskElement(taskInput.value);
//   taskInput.value = '';
// })

// function storeTaskInLocalStorage(task) {
//   const task = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks)') : [];
//   task.push(task);

//   localStorage.setItem('tasks', JSON.)
// }

// function createSingleTaskElement(taskInput) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode('taskInput'));
//   taskInput.appendChild(li);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const task = localStorage.getItem('task') !== null ? JSON.parse(localStorage.getItem('task')) : [];
//   task.forEach(() => {
//     createSingleTaskElement(task);
//   })
// })