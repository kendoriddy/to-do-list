import './style.css';
import * as toDos from './crud.js';

document.querySelector('.enter').addEventListener('click', toDos.storeToDos);
document.querySelector('form').addEventListener('submit', toDos.storeToDos);
window.addEventListener('load', toDos.showToDos);

// const listItem = () => {
//   let listData = '';
//   todoData.forEach((data) => {
//     listData += `
//     <li class="todo-item">
//       <div class="todo-event">
//         <input type="checkbox" ${data.completed ? 'checked' : ''} class="status" title="Checked">
//         <input type="text" class="todo" value="${data.description}">
//         <i class="fa fa-trash delete hide" aria-hidden="true"></i>
//         <i class="fa fa-ellipsis-v reorder" aria-hidden="true"></i>
//       </div>
//       <hr>
//     </li>
//     `;
//   });
//   return listData;
// };

// const renderList = () => {
//   const collection = document.querySelector('.todo-collection');
//   collection.innerHTML = listItem();
// };
// renderList();