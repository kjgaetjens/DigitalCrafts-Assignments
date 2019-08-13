class Post {
    constructor(postId = null, title, author, postText, userId) {
        this.postid = postId
        this.title = title
        this.author = author
        this.postText = postText
    }
}

module.exports = Post