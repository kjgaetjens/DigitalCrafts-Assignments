const express = require('express')
const app = express()
const cors = require('cors')
var mongoose = require('mongoose')
const Snippet = require('./models/snippet')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost/snippetdb', {useNewUrlParser: true}, (error) => {
    if(!error) {
        console.log('Successfully connected to MongoDB database!')
    }
})

app.get('/view-snippets', (req, res) => {
    Snippet.find({}, (error,snippets) => {
        if(error) {
            res.json({error: 'Unable to fetch'})
        } else {
            res.send(snippets)
        }
    })
})

app.post('/add-snippet', (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let tag = req.body.tag

    let snippet = new Snippet({
        title: title,
        body: body,
        tag: tag
    })

    snippet.save((error) => {
        if (error) {
            res.json({error: "Unable to save"})
        } else {
            res.json({success: true, message: "Saved successfully"})
        }
    })

})

app.put('/update-snippet', (req, res) => {

    let snippetId = req.body.snippetId

    let title = req.body.title
    let body = req.body.body
    let tag = req.body.tag

    let updatedSnippet = {
        title: title,
        body: body,
        tag: tag
    }

    Snippet.findByIdAndUpdate(snippetId, updatedSnippet, (error, result) => {
        if(error) {
            res.json({error: 'Unable to update'})
        } else {
            res.json({updated: true})
        }
    })

})

app.delete('/delete-snippet', (req, res) => {

    let snippetId = req.body.snippetId

    Snippet.remove({_id: snippetId}, (error, result) => {
        if(error) {
            res.json({error: 'Unable to delete'})
        } else {
            res.json(result)
        }
    })

})





app.listen(3001, () => {
    console.log("Server is running...")
})