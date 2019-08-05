/*
In this project you are responsible for creating the Web API for TODO app using Node. 

Your API will expose the following endpoints: 
- Get all TODO items (/todos) 
- Save a new TODO item (/todos) 

TODO item class is shown below (for this assignment we are not using classes): 

TodoItem: 
- title (this represents the title of the todo item) 
- priority (this can be high or low)
- dateCreated (this represents the date item was created) 
- dateCompleted (this represents the date item was completed) 
- isCompleted (boolean indicating if the todo item was completed or not) 
You are also responsible for creating the User Interface for your app which will consume the API. 

HARD MODE: 
- Ability to delete an existing TODO item - /todos DELETE 
- Ability to update an existing TOD item 
* Creating a class for TODO list item is not mandatory but it is a good practice. 
*/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

let toDoList = []

app.use(bodyParser.json())
app.use(cors())


app.get('/favicon.ico', (req, res) => res.status(204));

app.post('/toDoItem',(req,res) => {
    let title = req.body.itemTitle
    let priority = req.body.itemPriority
    let dateCreated = req.body.itemDateCreated
    let dateCompleted =req.body.itemDateCompleted
    let isCompleted = req.body.itemIsCompleted

    let toDoItem = {title: title, priority: priority, dateCreated: dateCreated, dateCompleted: dateCompleted, isCompleted: isCompleted}
    toDoList.push(toDoItem)
    res.send("added")
})

app.get('/toDoItem',(req,res) => {
    res.json(toDoList)
})

//need to write a get 

app.listen(4000, () => {
    console.log("Server is running...")
})