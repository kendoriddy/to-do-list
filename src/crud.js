import { completedTodos } from './complete.js';
import dots from '../assets/images/dots.png';
import deleteIcon from '../assets/images/delete.png';
import saveIcon from '../assets/images/save.jpeg';

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
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  // eslint-disable-next-line no-use-before-define
  showToDos();
};

// const completedTodos = (e) => {
//   const checkbox = e.target;
//   let btnId = checkbox.id;
//   btnId = btnId.split('-');
//   const id = parseInt(btnId[1], 10);
//   const inputId = document.querySelector(`#activity-${id}`);
//   const existingTodos = JSON.parse(localStorage.getItem('todos'));
//   if (checkbox.checked) {
//     existingTodos[id].completed = true;
//     inputId.classList.add('completed');
//     localStorage.setItem('todos', JSON.stringify(existingTodos));
//   } else {
//     existingTodos[id].completed = false;
//     inputId.classList.remove('completed');
//     localStorage.setItem('todos', JSON.stringify(existingTodos));
//   }
// };

// const clearCompletedTodos = () => {
//   const completed = document.querySelectorAll('input:checked');
//   console.log(completed);
//   let existingTodos = JSON.parse(localStorage.getItem('todos'));
//   if (completed) {
//     completed.forEach((item) => {
//       const todo = item.parentNode;
//       todo.parentNode.remove();
//     });
//   }
//   existingTodos = existingTodos.filter((todos) => todos.completed === false);
//   existingTodos.forEach((todo, i) => {
//     (todo.index = i + 1);
//   });
//   localStorage.setItem('todos', JSON.stringify(existingTodos));
// };

const saveTodos = (e) => {
  const saveBtn = e.target;
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  const btnClass = saveBtn.className;
  const btnId = btnClass.split('-');
  const id = parseInt(btnId[1], 10);
  const taskList = document.querySelector(`#tasks-${id}`);
  const saveEdit = document.querySelector(`.save-${id}`);
  const deleteEdit = document.querySelector(`.delete-${id}`);
  const inputId = document.querySelector(`#activity-${id}`);
  const editBtn = document.getElementById(`${id}`);
  editBtn.style.display = 'block';

  existingTodos[id].description = inputId.value;
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  saveEdit.remove();
  deleteEdit.remove();
  taskList.classList.remove('active');
  inputId.setAttribute('readonly', true);
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

const showToDos = () => {
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (existingTodos !== null && existingTodos.length > 0) {
    const collection = document.querySelector('.todo-collection');
    collection.innerHTML = '';

    existingTodos.forEach((todo, index) => {
      const unordered = document.createElement('ul');
      const ordered = document.createElement('li');
      const liner = document.createElement('hr');

      unordered.classList.add('tasks');
      unordered.id = `tasks-${index}`;

      ordered.classList.add('tasks');
      ordered.id = `task-${index}`;

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.classList.add('check');
      check.id = `check-${index}`;

      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('activity');
      input.id = `activity-${index}`;
      input.setAttribute('readonly', true);
      input.value = `${todo.description}`;

      const edit = document.createElement('img');
      edit.setAttribute('src', dots);
      edit.classList.add('edit');
      edit.id = index;

      collection.appendChild(unordered);
      collection.appendChild(liner);
      unordered.appendChild(ordered);
      ordered.appendChild(check);
      ordered.appendChild(input);
      ordered.appendChild(edit);
    });

    document.querySelector('#clear-completed').style.display = 'block';

    document.querySelectorAll('.edit').forEach((e) => {
      e.addEventListener('click', editTodos);
    });

    document.querySelectorAll('.check').forEach((e) => {
      e.addEventListener('change', completedTodos);
    });
  } else {
    document.querySelector('.todo-collection').innerHTML = '';
  }
};

const storeToDos = (e) => {
  e.preventDefault();
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos = existingTodos === null ? [] : existingTodos;

  const inputTodo = document.getElementById('enter-todo').value;
  const newTodo = new ToDo(inputTodo, false, existingTodos.length + 1);

  if (inputTodo !== '') {
    existingTodos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(existingTodos));
    document.getElementById('enter-todo').value = '';
    showToDos();
  }
};

export { storeToDos, showToDos };