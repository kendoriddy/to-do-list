import './style.css';

const todoData = [
  {
    description: 'Brush and shower',
    completed: true,
    index: 1,
  },
  {
    description: 'Eat and exercise',
    completed: true,
    index: 2,
  },
  {
    description: 'Watch YouTube shorts',
    completed: false,
    index: 3,
  },
  {
    description: 'Microverse hours',
    completed: false,
    index: 4,
  },
  {
    description: 'Call family',
    completed: true,
    index: 5,
  },
];

const listItem = () => {
  let listData = '';
  todoData.forEach((data) => {
    listData += `
    <li class="todo-item">
      <div class="todo-event">
        <input type="checkbox" ${data.completed ? 'checked' : ''} class="status" title="Checked">
        <input type="text" class="todo" value="${data.description}">
        <i class="fa fa-trash delete hide" aria-hidden="true"></i>
        <i class="fa fa-ellipsis-v reorder" aria-hidden="true"></i>
      </div>
      <hr>
    </li>
    `;
  });
  return listData;
};

const renderList = () => {
  const collection = document.querySelector('.todo-collection');
  collection.innerHTML = listItem();
};
renderList();