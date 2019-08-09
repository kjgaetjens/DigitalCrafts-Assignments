/*
You are in charge of creating a website for tracking trips. You will use server side pages using Mustache or any other server side template framework for this assignment. 
Your app should allow users to do the following: 
- Ability to add a new trip. A new trip consists of title, image, date of departure, date of return 
- Ability to view all the trips (A sample screenshot is shown below) 
- Ability to delete a trip 
- Add the ability to allow user to register for the website 
- Allow the user to login to the website 
- Allow the user to signout from the website 
- Allow the user to only see their trips after they login successfully
* Your app should work on mobile devices 
* Google Trips is a good app for inspiration and ideas! (Available on the App Store)  
*/



global.users = []

const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const User = require('./models/user')
const tripRouter = require('./routes/triproute.js')

app.use(session({
    secret: 'mdhf888',
    resave: false,
    saveUninitialized: true,
  }))
app.use(express.static('public'))
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

app.use('/trip', authenticate)
app.use('/trip', tripRouter)

const VIEWS_PATH = path.join(__dirname, 'views')

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
// the pages are located in views directory
app.set('views',VIEWS_PATH)
// extension will be .mustache
app.set('view engine','mustache')




app.get('/login', (req,res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    //check for session
    if (req.session) {
        let username = req.body.username
        let password = req.body.password
        let validatedUsername = users.find(user => {
            return user.username == username && user.password == password
        })
        if (validatedUsername) {
            req.session.username = username
            res.redirect('/trip')
        } else {
            res.render('login', {alert: "Invalid username or password"})
        }


    }
    //check for persisted user
    //change the session name or error

})

app.get('/signup', (req,res) => {
    res.render('signup')
})

app.post('/signup', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let existingUsername = users.find(user => {
        return user.username == username
    })
    if (!existingUsername) {
        let userObj = new User(username, password)
        users.push(userObj)
        if (req.session) {
            req.session.username = username
            res.redirect('/trip')
        }
    } else {
        res.render('signup', {alert: 'The username you have selected already exists'})
    }

    //build in some code to prevent duplicate usernames
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
