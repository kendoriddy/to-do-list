import setStorage from './storage.js';
import deleteIcon from '../assets/images/delete.png';
import saveIcon from '../assets/images/save.jpeg';
// eslint-disable-next-line import/no-cycle
import showToDos from './modules/display.js';

class ToDo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

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

const saveTodo = (id, isBtn = false) => {
  const taskList = document.querySelector(`#tasks-${id}`);
  const saveEdit = document.querySelector(`.save-${id}`);
  const deleteEdit = document.querySelector(`.delete-${id}`);
  const inputId = document.querySelector(`#activity-${id}`);
  const editBtn = document.getElementById(`${id}`);
  editBtn.style.display = 'block';

  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos[id].description = inputId.value;
  setStorage(existingTodos);
  if (isBtn) {
    saveEdit.remove();
    deleteEdit.remove();
  }
  taskList.classList.remove('active');
  inputId.setAttribute('readonly', true);
};

const saveTodos = (e) => {
  const saveBtn = e.target;
  const btnClass = saveBtn.className;
  const btnId = btnClass.split('-');
  const id = parseInt(btnId[1], 10);
  saveTodo(id, true);
};

const editTodos = (e) => {
  const editInput = e.target;
  const editBtn = document.getElementById(`${editInput.id}`);
  const inputId = document.querySelector(`#activity-${editInput.id}`);
  inputId.removeAttribute('readonly');
  inputId.focus();

  editBtn.style.display = 'none';
  inputId.style.outlineColor = 'gray';

  const taskList = document.querySelector(`#tasks-${editInput.id}`);
  taskList.classList.add('active');

  const task = document.querySelector(`#task-${editInput.id}`);

  const save = document.createElement('img');
  save.setAttribute('src', saveIcon);
  save.classList.add(`save-${editInput.id}`);
  task.appendChild(save);

  const removeBtn = document.createElement('img');
  removeBtn.classList.add(`delete-${editInput.id}`);
  removeBtn.setAttribute('src', deleteIcon);
  task.appendChild(removeBtn);

  document.querySelectorAll(`.delete-${editInput.id}`).forEach((e) => {
    e.addEventListener('click', deleteTodos);
  });

  document.querySelectorAll(`.save-${editInput.id}`).forEach((e) => {
    e.addEventListener('click', saveTodos);
  });
};

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

export { storeToDos, editTodos, saveTodos, saveTodo };
