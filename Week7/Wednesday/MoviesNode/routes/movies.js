const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const Movie = require('../models/movie')
const Genre = require('../models/genre')

const router = express.Router()

global.movies = []
global.deletedMovies = []

const genreNames = ['Action','Comedy','Drama','Horror','Romance']
const genres = []
genreNames.forEach(name => {
    let genreObj = new Genre(name)
    genres.push(genreObj)
})


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
    let id = req.body.id
    global.deletedMovies.push(id)
    res.redirect('/movies')
})

router.get('/genre', (req, res) => {
    res.render('genres', {genres: genres})
})

router.get('/genre/:genre', (req, res) => {
    let genreName = req.params.genre
    let filteredMovies = []
    global.movies.forEach(movie => {
        if ((!deletedMovies.includes(movie.id)) && (genreName == movie.genre)) {
            filteredMovies.push(movie)
        }
    })
    let genreAndMovies = {genre: genreName, movies: filteredMovies}
    res.render('filteredmovies', {movies: genreAndMovies})
})


router.get('/:movieid', (req, res) => {
    let id = req.params.movieid
    let movie = global.movies.find(movie => {
        if (movie.id == id) {
            return movie
        }
    })
    res.render('moviedetails', movie)
})


module.exports = router