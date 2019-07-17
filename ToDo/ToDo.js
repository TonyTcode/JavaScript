let addButton = document.getElementById("saveTaskButton")
let createTaskList = document.getElementById("createTaskTextBox")
let pendingTasksList = document.getElementById("pendingTasksDiv")
let completedTasks = document.getElementById("completedTasksDiv")

addButton.addEventListener('click', function() {
    console.log("button click fired")

    let task = createTaskList.value
    createTaskList.value = ""

    let pendingTasksList = document.createElement("div")
    pendingTasksList.innerHTML = task

    let checkTask = document.createElement("input")
    checkTask.type = "checkbox"
    checkTask.addEventListener('click', function(){
        if(this.checked) {completedTasks.appendChild(this.parentElement)
        }else if(this.checked == false) {pendingTasks.appendChild(this.parentElement)}
    })

    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener('click', function(){
        this.parentElement.parentElement.removeChild(this.parentElement)
    })

    pendingTasksList.appendChild(checkTask)
    pendingTasksList.appendChild(removeButton)
    pendingTasksDiv.appendChild(pendingTask)
})