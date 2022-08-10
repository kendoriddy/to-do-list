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

const showToDos = () => {
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (existingTodos !== null && existingTodos.length > 0) {
    const collection = document.querySelector('.todo-collection');
    collection.innerHTML = '';

    existingTodos.forEach((todo, index) => {
      const unordered = document.createElement('ul');
      const ordered = document.createElement('li');
      const liner = document.createElement('hr')

      unordered.classList.add('tasks');
      unordered.id = `tasks-${index}`;

      ordered.classList.add('tasks');
      ordered.id = `task-${index}`;

      const check = document.createElement('input');
      check.type = 'checkbox';
      check.classList.add('check');

      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('activity');
      input.id = `activity-${index}`;
      input.setAttribute('readonly', true);
      input.value = `${todo.description}`;
      input.innerHTML = todo.description;

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

    document.querySelectorAll('.edit').forEach((e) => {
      e.addEventListener('click', console.log('edit me'));
    });
  } else {
    document.querySelector('.todo-collection').innerHTML = '';
  }
};

const deleteTodos = (e) => {
  const btnClass = e.target.className;
  const btnId = btnClass.split('-');
  const id = parseInt(btnId[1], 10);
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos = existingTodos.filter((todos, index) => index !== id);
  e.target.parentNode.remove();
  // eslint-disable-next-line no-return-assign
  existingTodos.forEach((task, i) => task.index = i + 1);
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  showToDos();
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