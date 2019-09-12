const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001
const Location = require('./models/location')

app.use(cors())
app.use(express.json())

//remove test data
const testlocation1 = new Location(14, 26)
const testlocation2 = new Location(15, 27)
locations = [testlocation1,testlocation2]

//set up get to display all locations
//after, integrate with the map display url in the assignment
app.get('/', (req,res) => {
    res.json(locations)
})

//set up post to add the lat/long to the db
app.post('/add-location', (req,res) => {
    const location = new Location(req.body.lat, req.body.long)
    locations.push(location)
    res.status(200).send() 
})


app.listen(PORT, () => {
    console.log('Server is running...')
})