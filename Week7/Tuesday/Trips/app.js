/*
You are in charge of creating a website for tracking trips. You will use server side pages using Mustache or any other server side template framework for this assignment. 

Your app should allow users to do the following: 
- Ability to add a new trip. A new trip consists of title, image, date of departure, date of return 
- Ability to view all the trips (A sample screenshot is shown below. Screenshot is just for demoeing purposes you can design your app however you want) 
- Ability to delete a trip 
* Your app should work on mobile devices 
* Google Trips is a good app for inspiration and ideas! (Available on the App Store)  

HARDMODE: 
- Ability to update the trip 
- Ability to sort the trip by date
- Ability to search for the trip by destination city
*/


//add a way to delete a trip
//add a confirm page after add?
//add a way to add another trip under view trips?

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const tripRouter = require('./routes/triproute.js')

app.use(express.static('public'))
app.use(express.urlencoded())
app.use('/trip', tripRouter)

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')


app.listen(3000, () => {
    console.log('Server has started...')
})
