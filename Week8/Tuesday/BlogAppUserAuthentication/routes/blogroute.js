const express = require('express')
const Post = require('../models/posts.js')

const router = express.Router()


router.get('/', async (req, res) => {
    let posts = await db.any('SELECT postid, title, author, dateposted, posttext FROM posts ORDER BY dateposted DESC')
    res.render('blog', {posts: posts})
})

router.get('/addblog', (req, res) => {
    res.render('addBlog')
})

router.post('/addblog', async (req, res) => {
    let postTitle = req.body.postTitle
    let postAuthor = req.body.postAuthor
    let postText = req.body.postText
    let userid = req.session.userid
    let updatedpost = await db.none('INSERT INTO posts(title, author, posttext, userid) VALUES($1, $2, $3, $4)', [postTitle, postAuthor, postText, userid])
    res.redirect('/blog')
    //need to add code in here that adds the user id as a foreign key

})

router.get('/:id/updateblog', async (req, res) => {
    let postId = req.params.id
    let posts = await db.any('SELECT postid, title, author, dateposted, posttext FROM posts WHERE postid = $1', [postId])
    res.render('updateBlog', {posts: posts})
})

router.post('/:id/updateblog/update', async (req, res) => {
    let postId = req.params.id
    let postTitle = req.body.postTitle
    let postAuthor = req.body.postAuthor
    // let dateLastUpdated = Date.now()
    let postText = req.body.postText
    let posts = await db.none('UPDATE posts SET title = $1, author = $2, posttext = $3 WHERE postid = $4', [postTitle, postAuthor, postText, postId])
    res.redirect('/blog')
})

router.post('/:id/deleteblog', async (req, res) => {
    let postId = req.params.id
    let deletepost = await db.none('DELETE FROM posts WHERE postid = $1', [postId])
    res.redirect('/blog')
})



module.exports = router