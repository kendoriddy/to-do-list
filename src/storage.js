const setStorage = (task) => {
  localStorage.setItem('todos', JSON.stringify(task));
};

export default setStorage;
