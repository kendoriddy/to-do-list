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
  }
};

export { storeToDos };