/*
You are going to continue working on your Blog application. Here are additional features you are going to add. 
- Allow the user to register for the website 
- Allow the user to login to the website 
- Allow the users to create posts 
- Allow the users to post comments 
- Create a page to show all posts from the database. Each post will also display the number of comments available for that post. 
- Create a post details page where you will display the details about the post and also the comments associated with the post. 
- Add the ability to delete a post and comment 
- Host your database (ElephantSQL or any other service) 

HARD MODE: 
- Allow the user to sort the posts based on number of comments 
- Allow the user to sort the post based on date published 
- Allow the user to delete a post and this will also delete all the comments associated with the post. 
*/


global.users = [] //replace with actual db

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const PORT = 3000
const path = require('path')
const VIEWS_PATH = path.join(__dirname, 'views')
const User = require('./models/users')
const Post = require('./models/posts')
const blogRouter = require('./routes/blogroute.js')

const pgp = require('pg-promise')()
const connectionString = 'postgres://oqvrnous:eeZO88gm6FeD3a8zNaA51Ik28Gtuh_rY@raja.db.elephantsql.com:5432/oqvrnous'
global.db = pgp(connectionString)

app.use(session({
    secret: 'mdhf888',
    resave: false,
    saveUninitialized: true,
}))
app.use(express.urlencoded())

function authenticate(req, res, next) {
    if (req.session) {
        if (req.session.username) {
            next()
        } else {
            res.redirect('/login')
        }
    }
}

app.use('/blog', authenticate)
app.use('/blog', blogRouter)


app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

app.get('/login', (req,res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    if (req.session) {
        let username = req.body.username
        let password = req.body.password
        //change the below code to pull from the db and look more like azams code
        let validatedUsername = users.find(user => {
            return user.username == username && user.password == password
        })
        if (validatedUsername) {
            req.session.username = username
            app.locals.username = username
            res.redirect('/blog')
        } else {
            res.render('login', {alert: "Invalid username or password"})
        }

    }
})

app.get('/signup', (req,res) => {
    res.render('signup')
})

app.post('/signup', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    //change the below code to pull from the db and look more like azams code
    let existingUsername = users.find(user => {
        return user.username == username
    })
    if (!existingUsername) {
        //change to use db
        let userObj = new User(123, username, password)
        users.push(userObj)
        if (req.session) {
            req.session.username = username
            app.locals.username = username
            res.redirect('/blog')
        }
    } else {
        res.render('signup', {alert: 'The username you have selected already exists'})
    }
})

app.get('/signout', (req, res) => {
    if(req.session) {
        req.session.destroy(error => {
            if(error) {
                next(error)
            } else {
                res.redirect('/login')
            }
        }) 
    }
})



app.listen(3000, () => {
    console.log('Server has started...')
})
