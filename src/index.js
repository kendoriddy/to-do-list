import './style.css';
import showToDos from './modules/display.js';
import { clearCompletedTodos } from './complete.js';
import { storeToDos } from './modules/addTask.js';

document.querySelector('.enter').addEventListener('click', storeToDos);
document.querySelector('form').addEventListener('submit', storeToDos);
document
  .querySelector('#clear-completed')
  .addEventListener('click', clearCompletedTodos);
window.addEventListener('load', showToDos);
