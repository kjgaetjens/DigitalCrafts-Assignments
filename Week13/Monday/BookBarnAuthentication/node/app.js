const express = require('express')
const app = express();
const PORT = 5000
global.models = require('./models')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    models.Book.findAll({
    }).then(books => res.json(books)
    )
})

app.post('/add-book', (req,res)=>{
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

app.post('/delete-books/:bookid', (req,res)=>{
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