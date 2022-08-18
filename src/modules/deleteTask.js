import setStorage from '../storage.js';
import { showToDos } from '../crud.js';

const deleteTodos = (e) => {
  const btnClass = e.target.className;
  const btnId = btnClass.split('-');
  const id = parseInt(btnId[1], 10);
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos = existingTodos.filter((todos, index) => index !== id);
  e.target.parentNode.remove();
  existingTodos.forEach((task, i) => {
    task.index = i + 1;
  });
  setStorage(existingTodos);
  // eslint-disable-next-line no-use-before-define
  showToDos();
};

export default deleteTodos;