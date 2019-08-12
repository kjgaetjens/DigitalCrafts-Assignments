/*
In this assignment you are going to create a blog application. Here are the features you will implement: 
- Ability to create a new post 
- Ability to delete a post 
- Ability to update a post 
- Ability to view all posts 

HARD MODE: 
- Add the ability to allow the users to create an account 
- Add the ability to allow the users to login 
- Add the ability to associate User will blog post 
- User should be able to view all his/her blog posts 
*/

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 3000
const path = require('path')
const VIEWS_PATH = path.join(__dirname, 'views')

const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/blogdb'
const db = pgp(connectionString)

app.use(express.urlencoded())

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')


app.get('/blog', async (req, res) => {
    let posts = await db.any('SELECT postid, title, author, dateposted, datelastupdated, posttext FROM posts ORDER BY dateposted DESC')
    res.render('blog', {posts: posts})
})

app.get('/blog/addblog', (req, res) => {
    res.render('addBlog')
})

app.post('/blog/addblog', async (req, res) => {
    let postTitle = req.body.postTitle
    let postAuthor = req.body.postAuthor
    let postText = req.body.postText
    let updatedpost = await db.none('INSERT INTO posts(title, author, posttext) VALUES($1, $2, $3)', [postTitle, postAuthor, postText])
    res.redirect('/blog')
})

app.get('/blog/:id/updateblog', async (req, res) => {
    let postId = req.params.id
    let posts = await db.any('SELECT postid, title, author, dateposted, datelastupdated, posttext FROM posts WHERE postid = $1', [postId])
    res.render('updateBlog', {posts: posts})
})

app.post('/blog/:id/updateblog/update', async (req, res) => {
    let postId = req.params.id
    let postTitle = req.body.postTitle
    let postAuthor = req.body.postAuthor
    // let dateLastUpdated = Date.now()
    let postText = req.body.postText
    let posts = await db.none('UPDATE posts SET title = $1, author = $2, posttext = $3 WHERE postid = $4', [postTitle, postAuthor, postText, postId])
    res.redirect('/blog')
})

app.post('/blog/:id/deleteblog', async (req, res) => {
    let postId = req.params.id
    let deletepost = await db.none('DELETE FROM posts WHERE postid = $1', [postId])
    res.redirect('/blog')
})


app.listen(3000, () => {
    console.log('Server has started...')
})
