import setStorage from './storage.js';

const completedTodos = (e) => {
  const checkbox = e.target;
  let btnId = checkbox.id;
  btnId = btnId.split('-');
  const id = parseInt(btnId[1], 10);
  const inputId = document.querySelector(`#activity-${id}`);
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (checkbox.checked) {
    existingTodos[id].completed = true;
    inputId.classList.add('completed');
    setStorage(existingTodos);
  } else {
    existingTodos[id].completed = false;
    inputId.classList.remove('completed');
    setStorage(existingTodos);
  }
};

const clearCompletedTodos = () => {
  const completed = document.querySelectorAll('input:checked');
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (completed) {
    completed.forEach((item) => {
      const todo = item.parentNode;
      todo.parentNode.remove();
    });
  }
  existingTodos = existingTodos.filter((todos) => todos.completed === false);
  existingTodos.forEach((todo, i) => {
    (todo.index = i + 1);
  });
  setStorage(existingTodos);
};

export { completedTodos, clearCompletedTodos };