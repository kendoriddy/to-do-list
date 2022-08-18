import { ToDo, showToDos } from '../crud.js';
import setStorage from '../storage.js';

const storeToDos = (e) => {
  e.preventDefault();
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos = existingTodos === null ? [] : existingTodos;

  const inputTodo = document.getElementById('enter-todo').value;
  const newTodo = new ToDo(inputTodo, false, existingTodos.length + 1);

  if (inputTodo !== '') {
    existingTodos.push(newTodo);
    setStorage(existingTodos);
    document.getElementById('enter-todo').value = '';
    showToDos();
  }
};

export default storeToDos;