let pendingTasks = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")
let newTaskButton = document.getElementById("newTaskButton")
let pendingPlaceholder = document.getElementById("pendingPlaceholder")
let completedPlaceholder = document.getElementById("completedPlaceholder")

//add pending task placeholder
function addPendingPlaceholder() {
    pendingPlaceholder = document.createElement("li")
    pendingPlaceholder.id = "pendingPlaceholder"
    pendingPlaceholder.className = "task-box placeholder"
    let pendingPlaceholderDiv = document.createElement("div")
    let pendingPlaceholderText = document.createElement("div")
    pendingPlaceholderText.className = "placeholder-div"
    pendingPlaceholderText.innerHTML = "Pending Tasks Go Here"
    pendingPlaceholderDiv.appendChild(pendingPlaceholderText)
    pendingPlaceholder.appendChild(pendingPlaceholderDiv)
    pendingTasks.appendChild(pendingPlaceholder)
}

//add completed task placeholder
function addCompletedPlaceholder() {
    completedPlaceholder = document.createElement("li")
    completedPlaceholder.id = "completedPlaceholder"
    completedPlaceholder.className = "task-box placeholder"
    let completedPlaceholderDiv = document.createElement("div")
    let completedPlaceholderText = document.createElement("div")
    completedPlaceholderText.className = "placeholder-div"
    completedPlaceholderText.innerHTML = "Completed Tasks Go Here"
    completedPlaceholderDiv.appendChild(completedPlaceholderText)
    completedPlaceholder.appendChild(completedPlaceholderDiv)
    completedTasks.appendChild(completedPlaceholder)
}


//move task to completed or back to pending
function moveList() {
    if(this.checked) {
        completedTasks.appendChild(this.parentElement.parentElement)
        if (pendingTasks.childElementCount == 0) {
            addPendingPlaceholder()
        }
        completedPlaceholder.remove(this)
    } else {
        pendingTasks.appendChild(this.parentElement.parentElement)
        if (completedTasks.childElementCount == 0) {
            addCompletedPlaceholder()
        }
        pendingPlaceholder.remove(this)
    }
}

//remove item
 function removeList() {
     this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)
     if (pendingTasks.childElementCount == 0) {
         addPendingPlaceholder()
     }
     if (completedTasks.childElementCount ==0) {
         addCompletedPlaceholder()
     }
 }

//add new task to pending list
newTaskButton.addEventListener("click", function() {
    let newTaskInput = document.getElementById("newTask")
    if (newTaskInput.value) {
        let newTask = document.createElement("li")
        newTask.className = "task-box"
    
        let taskCheckBoxDiv = document.createElement("div")
        taskCheckBoxDiv.className = "check-box-div"
        let taskCheckBox = document.createElement("input")
        taskCheckBox.type = "checkbox"
        taskCheckBox.addEventListener("click", moveList)
        taskCheckBoxDiv.appendChild(taskCheckBox)
    
        let taskTitleDiv = document.createElement("div")
        taskTitleDiv.className = "title-div"
        let taskTitle = document.createElement("h3")
        taskTitle.innerHTML = newTaskInput.value
        taskTitleDiv.appendChild(taskTitle)
    
        let taskRemoveDiv = document.createElement("div")
        taskRemoveDiv.className = "remove-div"
        let taskRemove = document.createElement("a")
        taskRemove.innerHTML = "Remove"
        taskRemove.addEventListener("click", removeList)
        taskRemoveDiv.appendChild(taskRemove)
    
        newTask.appendChild(taskCheckBoxDiv)
        newTask.appendChild(taskTitleDiv)
        newTask.appendChild(taskRemoveDiv)
    
        pendingPlaceholder.remove(this)
        pendingTasks.appendChild(newTask)
        newTaskInput.value=""
    }
})
