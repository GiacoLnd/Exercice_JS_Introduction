const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);

const taskCard = document.querySelector('.todoCard');
const taskContainer = document.querySelector("#todoCards");

const counter = document.getElementById('count')


function addTask(){
    const newTask = taskCard.cloneNode(true)
    const newDelBtn = newTask.querySelector('.delBtn')
    const newTextArea = newTask.querySelector('.task')

    
    newTextArea.value = "New Task"
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask);
    })
    taskContainer.appendChild(newTask)
    updateCounter()
}


const delBtn = document.querySelector('.delBtn')
delBtn.addEventListener('click', function(){
    deleteTask(taskCard);
});


function deleteTask(task){
    task.remove();
    updateCounter()
}



function updateCounter(){
    const nbZone = taskContainer.children.length;
    counter.textContent = "Tâche(s) en attente : " + nbZone
}