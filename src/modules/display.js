import { completedTodos } from '../complete.js';
import dots from '../../assets/images/dots.png';
// eslint-disable-next-line import/no-cycle
import * as crud from '../crud.js';

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
            crud.saveTodo(taskIndex);
            e.target.blur();
          }
        });
      });
    });

    document.querySelector('#clear-completed').style.display = 'block';
    document.querySelector('.note').style.display = 'block';

    document.querySelectorAll('.edit').forEach((e) => {
      e.addEventListener('click', crud.editTodos);
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
        const taskIndex = Number(e.target.id.split('-')[1]);
        crud.saveTodo(taskIndex);
        e.target.blur();
      }
    });
  });
});

export default showToDos;