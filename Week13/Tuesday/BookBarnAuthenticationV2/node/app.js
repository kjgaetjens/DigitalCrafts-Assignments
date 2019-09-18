const express = require('express')
const app = express();
require('dotenv').config()
global.models = require('./models')
var jwt = require('jsonwebtoken');
const cors = require('cors')
const authenticate = require('./authentication')

global.users = [{username: 'test1', password: 'test123'}]

app.use(cors())
app.use(express.json())
app.all('/books/*', authenticate)


app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    let persistedUser = users.find(user => user.username == username && user.password == password)

    if (persistedUser) {
        var token = jwt.sign({username:username}, JWT_SECRET_KEY);
        res.json({token:token})
    } else {
        res.status(401).json({error: 'Invalid credentials'})
    }
})

app.get('/books/view', (req,res)=>{
    models.Book.findAll({
    }).then(books => res.json(books)
    )
})

app.post('/books/add-book', (req,res)=>{
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL

    models.Book.create({
        title: title,
        genre: genre,
        publisher: publisher,
        year: parseInt(year),
        imageURL: imageURL
    })
    res.redirect('/')
})

app.post('books/delete-books/:bookid', (req,res)=>{
    let bookid = req.params.bookid
    models.Book.destroy({
        where: {
            bookid:bookid
        }
    })
    res.redirect('/')
})

app.listen(PORT, ()=>{
    console.log("server is running")
})