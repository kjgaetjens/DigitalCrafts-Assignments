/*
In this assigment you are going to allow a user to keep track of their movie collection. Create a website which will allow the user perform the following features: 
- Ability to add a movie (title, description, genre, posterURL) 
- Ability to delete a movie 
- Ability to filter movies based on the genre 
- Ability to go to movie details page
- Expose all your movies by creating a Web API route at /api/movies which should return all the movies in JSON format. 

Routes: 
* /movies - View all movies (Show the poster image and the name of the movie on this age) 
* /movies - POST - Add a new movie 
* /delete-movie - POST - Deletes a movie 
* /movies/:movieId - Details about the movie (Show poster image, title, genre and description on this page) 
* /movies/genre/:genre - Show movies based on genre 
* Use Express Router to create movies.js route which will contain all the routes of the movies 
*/

const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const Movie = require('./models/movie')

const moviesRouter = require('./routes/movies')

app.use(express.urlencoded())
app.use(express.static('public'))
app.use('/movies', moviesRouter)

const VIEWS_PATH = path.join(__dirname, 'views')

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
// the pages are located in views directory
app.set('views',VIEWS_PATH)
// extension will be .mustache
app.set('view engine','mustache')





//set up listen
app.listen(3000, () => {
    console.log('Server has started...')
})