const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const Movie = require('../models/movie')

const router = express.Router()

//test data
let movie1 = new Movie(123, 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn', 'Kitten Movie', 'Action', 'A very good movie about a kitten')
let movie2 = new Movie(234, 'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg', 'Cat Movie', 'Action', 'A very good movie about a cat')
//end test data

global.movies = [movie1, movie2]
global.deletedMovies = []

const VIEWS_PATH = path.join(__dirname, 'views')

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
// the pages are located in views directory
app.set('views',VIEWS_PATH)
// extension will be .mustache
app.set('view engine','mustache')

router.get('/', (req, res) => {
    let filteredMovies = []
    global.movies.forEach(movie => {
        if (!deletedMovies.includes(movie.id)) {
            filteredMovies.push(movie)
        }
    })
    res.render('movies', {movies: filteredMovies})
})

router.post('/', (req, res) => {
    let currentTime = Date.now()
    let randomInt = Math.floor((Math.random() * 1000000000))
    let id = currentTime.toString() + randomInt.toString()
    let imgUrl = req.body.imgUrl
    let title = req.body.title
    let genre = req.body.genre
    let description = req.body.description
    let movieObj = new Movie(id, imgUrl, title, genre, description)
    global.movies.push(movieObj)
    res.redirect('/movies')
})

router.post('/delete-movie', (req, res) => {
    //push id to filtered ids
    let id = req.body.id
    global.deletedMovies.push(id)
    //change the get for movies so that it only shows filtered ones
    res.redirect('/movies')
})


router.get('/:movieid', (req, res) => {
    let id = req.params.movieid
    let movie = global.movies.forEach(movie => {
        if (movie.id == id) {
            return movie
        }
    })

    res.render('moviedetails', movie)
})


module.exports = router