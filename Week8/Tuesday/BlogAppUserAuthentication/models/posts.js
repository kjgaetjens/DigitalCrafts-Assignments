class Post {
    constructor(postId = null, title, author, postText) {
        this.postid = postId
        this.title = title
        this.author = author
        this.postText = postText
        this.comments = []
    }
    addComment(comment) {
        this.comments.push(comment)
    }
}

module.exports = Post