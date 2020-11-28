const tasksInput = document.querySelector(".tasks-input");
const taskButton = document.querySelector(".task-button");
const tasksList = document.querySelector(".tasks-list");

taskButton.addEventListener("click", (event) => {
  event.preventDefault();

  const taskDiv = document.createElement("div");
  const newTask = document.createElement("li");
  const completedTask = document.createElement("button");
  const trashTask = document.createElement("button");

  tasksList.appendChild(taskDiv);
  taskDiv.appendChild(newTask);
  taskDiv.appendChild(completedTask);
  taskDiv.appendChild(trashTask);
  taskDiv.classList.add("task");

  newTask.classList.add("task-item");
  newTask.innerText = tasksInput.value;

  completedTask.innerHTML = "<i class='fas fa-check'></i>";
  completedTask.classList.add("complete-btn");

  trashTask.innerHTML = "<i class='fas fa-trash'></i>";
  trashTask.classList.add("trash-btn");

  tasksInput.value = "";
});

tasksList.addEventListener('click', (event) => {
    targetClass = event.target.classList.value
    target = event.target
    task = target.parentElement
    console.log(targetClass) 
    if (targetClass === 'complete-btn'){
        task.classList.toggle('completed')
        target.classList.toggle('restore-task')
        target.innerHTML = "<i class='fas fa-arrow-left'></i>";
    }
    if (targetClass === 'complete-btn restore-task'){
        task.classList.toggle('completed')
        target.classList.toggle('restore-task')
        target.innerHTML = "<i class='fas fa-check'></i>";
    }
    
    if (targetClass === 'trash-btn') {
        task.classList.add('fall')
        task.addEventListener('transitionend', (event) => {
        task.remove()
        })
    }
    
})
