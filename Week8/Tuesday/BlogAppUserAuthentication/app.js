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
const bcrypt = require('bcrypt')

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

app.post('/login', async (req, res) => {
    if (req.session) {
        let username = req.body.username
        let password = req.body.password

        let validatedUsername = await db.oneOrNone('SELECT userid, username, password FROM users WHERE username = $1', [username])
        if(validatedUsername) {
            let validatedPassword = await bcrypt.compare(password, validatedUsername.password)
            if(validatedPassword) {
                req.session.userid = validatedUsername.userid
                req.session.username = username
                app.locals.username = username
                res.redirect('/blog')
            } else {
                res.render('login', {alert: "Invalid username or password"})
            }
        } else {
            res.render('login', {alert: "Invalid username or password"})
        }
     }
})

app.get('/signup', (req,res) => {
    res.render('signup')
})

app.post('/signup', async (req, res) => {
    let username = req.body.username
    let password = req.body.password
    //change the below code to pull from the db and look more like azams code

    let existingUsername = await db.oneOrNone('Select username FROM users WHERE username = $1', [username])

    if (!existingUsername) {
        let hash = await bcrypt.hash(password, 10)
        let updatedpost = await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hash])
        let useridObject = await db.one('Select userid FROM users WHERE username = $1', [username])
        let userid = useridObject.userid
        if (req.session) {
            req.session.userid = userid
            req.session.username = username //maybe delete
            app.locals.username = username //maybe delete
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
