const express = require('express')
const Trip = require('../models/trips.js')

const router = express.Router()

//need to go through the users array and find the user whos username matches up, then grab the trip property from that object

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
    let username = req.session.username
    let userObj = users.find(user => {
        return user.username == username
    })
    userObj.trips.push(trip)
    res.redirect('./')
})

//get view trips page
router.get('/', (req,res) => {
    let username = req.session.username
    let userObj = users.find(user => {
        return user.username == username
    })
    let filteredTrips = []
    userObj.trips.forEach((trip) => {
        if(!userObj.deletedTrips.includes(trip.tripId))
        filteredTrips.push(trip)
    })
    res.render('viewTrips', {trips: filteredTrips})
})

//delete trip
router.post('/deletetrip', (req, res) => {
    let username = req.session.username
    let userObj = users.find(user => {
        return user.username == username
    })
    let tripId = req.body.tripId
    userObj.deletedTrips.push(tripId)
    res.redirect('./')
})

module.exports = router