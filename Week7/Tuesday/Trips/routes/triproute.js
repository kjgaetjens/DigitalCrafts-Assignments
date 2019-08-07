const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const Trip = require('../models/trips.js')

const router = express.Router()

// tell express to use mustache templating engine
app.engine('mustache',mustacheExpress())
// the pages are located in views directory
app.set('views','./views')
// extension will be .mustache
app.set('view engine','mustache')


let trips = []
let deletedTrips = []

//get add page
router.get('/addtrip', (req,res) => {
    res.render('addTrip')
})
//post add page and redirect to view trips
router.post('/addtrip', (req, res) => {
    let tripTitle = req.body.tripTitle
    let tripImgsrc = req.body.tripImgsrc
    let dateDepart = req.body.dateDepart
    let dateReturn = req.body.dateReturn
    let currentTime = Date.now()
    let randomInt = Math.floor((Math.random() * 1000000000))
    let tripId = currentTime.toString() + randomInt.toString()
    let tripInfo = new Trip(tripTitle, tripImgsrc, dateDepart, dateReturn)
    let trip = {tripId: tripId, tripInfo: tripInfo}
    trips.push(trip)
    res.redirect('./viewtrips')
})

//get view trips page
router.get('/viewtrips', (req,res) => {
    let filteredTrips = []
    trips.forEach((trip) => {
        if(!deletedTrips.includes(trip.tripId))
        filteredTrips.push(trip)
    })
    res.render('viewTrips', {trips: filteredTrips})
})

//delete trip
router.post('/deletetrip', (req, res) => {
    let tripId = req.body.tripId
    deletedTrips.push(tripId)
    res.redirect('./viewtrips')
})

module.exports = router