$(document).ready(() => {

//change ids to hyphens

let $pendingTasks = $('#pendingTasks')
let $completedTasks = $('#completedTasks')
let $newTaskButton = $('#newTaskButton')

let $pendingPlaceholder = $('#pendingPlaceholder')
let $completedPlaceholder = $('#completedPlaceholder') 


//add new task to pending list
//prob get rid of the if statement if able to 
$newTaskButton.on('click', function() {
    let $newTaskInput = $('#newTask')
    if ($newTaskInput.val()) {
        let $newTask = $(`
        <li class="task-box">
            <div class="check-box-div">
                <input class="task-complete" type="checkbox">
            </div>
            <div class="title-div">
                <h3>${$newTaskInput.val()}</h3>
            </div>
            <div class="remove-div">
                <a class="task-remove">Remove</a>
            </div>
        </li>
        `)
    
        $pendingPlaceholder.hide()
        $newTask.appendTo($pendingTasks)
        $newTaskInput.val('')
    }
})

//move task to completed or back to pending
//make sure it never shows 2 placeholders in same list
$(document).on('click', '.task-complete', event => {
    if ($(event.currentTarget).prop("checked")) {
        $(event.currentTarget).closest('li').appendTo($completedTasks)
        if ($pendingTasks.children().length == 1) {
            $pendingPlaceholder.show()
        }
        $completedPlaceholder.hide()
    } else {
        $(event.currentTarget).closest('li').appendTo($pendingTasks)
        if ($completedTasks.children().length == 1) {
            $completedPlaceholder.show()
        }
        $pendingPlaceholder.hide()
    }
})

 //remove
 $(document).on('click', '.task-remove', event => {
    $(event.currentTarget).closest('li').remove()
    if ($pendingTasks.children().length == 1) {
        console.log('test')
        $pendingPlaceholder.show()
    }
    if ($completedTasks.children().length == 1) {
        $completedPlaceholder.show()
    }
 })

})

