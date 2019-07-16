let pendingTasks = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")
let newTaskButton = document.getElementById("newTaskButton")

//move task to completed or back to pending
function moveList() {
    if(this.checked) {
        completedTasks.appendChild(this.parentElement)
    } else {
        pendingTasks.appendChild(this.parentElement)
    }
}

//remove item
 function removeList() {
     this.parentElement.parentElement.removeChild(this.parentElement)
 }

//add new task to pending list
newTaskButton.addEventListener("click", function() {
    let newTask = document.createElement("li")

    let taskCheckBox = document.createElement("input")
    taskCheckBox.type = "checkbox"
    taskCheckBox.addEventListener("click", moveList)

    let taskTitle = document.createElement("h3")
    let newTaskInput = document.getElementById("newTask")
    taskTitle.innerHTML = newTaskInput.value

    let taskRemove = document.createElement("a")
    taskRemove.innerHTML = "Remove"
    taskRemove.addEventListener("click", removeList)

    newTask.appendChild(taskCheckBox)
    newTask.appendChild(taskTitle)
    newTask.appendChild(taskRemove)

    pendingTasks.appendChild(newTask)
    newTaskInput.value=""
})




//boostrap dis dude
//make it look purty

//add blank placeholder for task if nothing's there

//do not allow you to click add unless field has input (change this into a form?)

//add sorting//

