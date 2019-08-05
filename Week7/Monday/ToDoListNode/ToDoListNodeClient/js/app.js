let itemTitleField = document.getElementById('title')
let itemPriorityField = document.getElementById('priority')
let addButton = document.getElementById('add-button')


addButton.addEventListener('click', () => {
    let currentTime = new Date().toISOString().slice(0, 10)

    let title = itemTitleField.value
    let priority = itemPriorityField.value
    let dateCreated = currentTime
    let dateCompleted = ""
    let isCompleted = false

    fetch('http://localhost:4000/toDoItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            itemTitle: title,
            itemPriority: priority,
            itemDateCreated: dateCreated,
            itemDateCompleted: dateCompleted,
            itemIsCompleted: isCompleted
        })
    })
})


let viewButton = document.getElementById('view-button')
let viewTasksContainer = document.getElementById('view-tasks-container')

//write get using fetch

//need to do a for each and then convert it into template literals and append them to the div

viewButton.addEventListener('click', () => {
    let divs =[]
    fetch('http://localhost:4000/toDoItem')
        .then(response => response.json())
        .then(json => {
            json.forEach(object => {
                let div = `<div>
                            <span>${object.title}</span>
                            <span>${object.priority}</span>
                            <span>${object.dateCreated}</span>
                            <span>${object.isCompleted}</span>
                            <span>${object.dateCompleted}</span>
                            </div>`
                divs.push(div)
            })
            viewTasksContainer.innerHTML = divs.join('')
        })
})


//write json dom manipulation based off of that fetch


//write a post to mark items as complete