const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
let addButton = document.getElementById('addButton');

function createTask(){
    let newTask = document.createElement('li');
    newTask.textContent = inputBox.value;
    listContainer.append(newTask);
    inputBox.value = "";
}
function checkTask(e){
    e.target.classList.toggle('checked');
}
addButton.addEventListener('click', createTask);
listContainer.addEventListener('click', checkTask, false);