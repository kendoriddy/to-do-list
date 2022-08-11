import './style.css';
import * as toDos from './crud.js';

document.querySelector('.enter').addEventListener('click', toDos.storeToDos);
document.querySelector('form').addEventListener('submit', toDos.storeToDos);
document.querySelector('#clear-completed').addEventListener('click', toDos.clearCompletedTodos);
window.addEventListener('load', toDos.showToDos);
