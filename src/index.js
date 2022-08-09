import './style.css';

const todoData = [
  {
    index: 1,
    activity: 'Brush and shower',
    isComplete: true,
  },
  {
    index: 2,
    activity: 'Eat and exercise',
    isComplete: true,
  },
  {
    index: 3,
    activity: 'Watch YouTube shorts',
    isComplete: false,
  },
  {
    index: 4,
    activity: 'Microverse hours',
    isComplete: false,
  },
  {
    index: 5,
    activity: 'Call family',
    isComplete: true,
  },
];

const listItem = () => {
  let listData = '';
  todoData.forEach((data) => {
    listData += `
    <li class="todo-item">
      <div class="todo-event">
        <input type="checkbox" ${data.isComplete ? 'checked' : ''} class="status" title="Checked">
        <input type="text" class="todo" value="${data.activity}">
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