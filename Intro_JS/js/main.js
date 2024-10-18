const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);

const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector("#todoCards");

const counter = document.getElementById('count')

let count = 1

function addTask(){
    const newTask = taskCard.cloneNode(true)
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    count++;
    counter.textContent = `Tâche(s) en attente : ${count}`
    
    newTextArea.value = "New Task"
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask);
    })
    taskContainer.appendChild(newTask)
}


const delBtn = document.querySelector('.delBtn')
delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
});


function deleteTask(task){
    task.remove();
    count--;
    counter.textContent = `Tâche(s) en attente : ${count}`
}



