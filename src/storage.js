class TASK {
  constructor() {
    this.taskList = [];
  }

static getItems = () => JSON.parse(localStorage.getItem('todos'));

static saveItems = (existingTodos) => localStorage.setItem('todos', JSON.stringify(existingTodos));
}

export default TASK;