$(document).ready(() => {

//change ids to hyphens

let $pendingTasks = $('#pendingTasks')
let $completedTasks = $('#completedTasks')
let $newTaskButton = $('#newTaskButton')

let $pendingPlaceholder = $('#pendingPlaceholder')
let $completedPlaceholder = $('#completedPlaceholder')

// //add pending task placeholder
// function addPendingPlaceholder() {
//     pendingPlaceholder = document.createElement("li")
//     pendingPlaceholder.id = "pendingPlaceholder"
//     pendingPlaceholder.className = "task-box placeholder"
//     let pendingPlaceholderDiv = document.createElement("div")
//     let pendingPlaceholderText = document.createElement("div")
//     pendingPlaceholderText.className = "placeholder-div"
//     pendingPlaceholderText.innerHTML = "Pending Tasks Go Here"
//     pendingPlaceholderDiv.appendChild(pendingPlaceholderText)
//     pendingPlaceholder.appendChild(pendingPlaceholderDiv)
//     pendingTasks.appendChild(pendingPlaceholder)
// }

// //add completed task placeholder
// function addCompletedPlaceholder() {
//     completedPlaceholder = document.createElement("li")
//     completedPlaceholder.id = "completedPlaceholder"
//     completedPlaceholder.className = "task-box placeholder"
//     let completedPlaceholderDiv = document.createElement("div")
//     let completedPlaceholderText = document.createElement("div")
//     completedPlaceholderText.className = "placeholder-div"
//     completedPlaceholderText.innerHTML = "Completed Tasks Go Here"
//     completedPlaceholderDiv.appendChild(completedPlaceholderText)
//     completedPlaceholder.appendChild(completedPlaceholderDiv)
//     completedTasks.appendChild(completedPlaceholder)
// }


// //move task to completed or back to pending
// function moveList() {
//     if(this.checked) {
//         completedTasks.appendChild(this.parentElement.parentElement)
//         if (pendingTasks.childElementCount == 0) {
//             addPendingPlaceholder()
//         }
//         completedPlaceholder.remove(this)
//     } else {
//         pendingTasks.appendChild(this.parentElement.parentElement)
//         if (completedTasks.childElementCount == 0) {
//             addCompletedPlaceholder()
//         }
//         pendingPlaceholder.remove(this)
//     }
// }

// //remove item
//  function removeList() {
//      this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)
//      if (pendingTasks.childElementCount == 0) {
//          addPendingPlaceholder()
//      }
//      if (completedTasks.childElementCount ==0) {
//          addCompletedPlaceholder()
//      }
//  }

//add new task to pending list
//prob get rid of the if statement if able to 
$newTaskButton.on('click', function() {
    let $newTaskInput = $('#newTask')
    if ($newTaskInput.val()) {
        let $newTask = $(`
        <li class="task-box">
            <div class="check-box-div">
                <input type="checkbox">
            </div>
            <div class="title-div">
                <h3>${$newTaskInput.val()}</h3>
            </div>
            <div class="remove-div">
                <a>Remove</a>
            </div>
        </li>
        `)
    
        // taskCheckBox.addEventListener("click", moveList)
        // taskRemove.addEventListener("click", removeList)
        $pendingPlaceholder.hide()
        $newTask.appendTo($pendingTasks)
        $newTaskInput.val('')
    }
})


})

