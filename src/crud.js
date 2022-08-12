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

const saveTodo = (id, isBtn = false) => {
  const taskList = document.querySelector(`#tasks-${id}`);
  const saveEdit = document.querySelector(`.save-${id}`);
  const deleteEdit = document.querySelector(`.delete-${id}`);
  const inputId = document.querySelector(`#activity-${id}`);
  const editBtn = document.getElementById(`${id}`);
  editBtn.style.display = 'block';

  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos[id].description = inputId.value;
  localStorage.setItem('todos', JSON.stringify(existingTodos));
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
      input.value = `${todo.description}`;
      if (todo.completed) {
        check.checked = true;
        input.classList.add('completed');
      }

      const edit = document.createElement('img');
      edit.setAttribute('src', dots);
      edit.classList.add('edit');
      edit.id = index;

      collection.appendChild(unordered);
      unordered.appendChild(ordered);
      unordered.appendChild(liner);
      ordered.appendChild(check);
      ordered.appendChild(input);
      ordered.appendChild(edit);

      ['focus', 'blur', 'keyup'].forEach((evt) => {
        input.addEventListener(evt, (e) => {
          if (evt === 'blur' || (evt === 'keyup' && e.key === 'Enter')) {
            const taskIndex = Number(e.target.id.split('-')[1]);
            saveTodo(taskIndex);
            e.target.blur();
          }
        });
      });
    });

    document.querySelector('#clear-completed').style.display = 'block';
    document.querySelector('.note').style.display = 'block';

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

const activity = document.querySelectorAll('.activity');

activity.forEach((element) => {
  ['focus', 'blur', 'keyup'].forEach((evt) => {
    element.addEventListener(evt, (e) => {
      if (evt === 'blur' || (evt === 'keyup' && e.key === 'Enter')) {
        // It's a modify
        const taskIndex = Number(e.target.id.split('-')[1]);
        saveTodo(taskIndex);
        e.target.blur();
      }
    });
  });
});

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