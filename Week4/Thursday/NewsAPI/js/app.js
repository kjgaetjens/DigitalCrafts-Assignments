// Your task is to display news to the user. The news.zip file (attached) already has a JSON formatted object which contains the news. Create a page which displays the following information related to the news. 

// author
// title
// description
// url (hyperlink to go to the news)
// urlToImage (image associated with the news) 
// publishedAt

// HARD MODE: 
// - There is a js file called "sources.js" in the attached download. Use that file to display all the sources. When the user clicks on a particular source then show the user news from that source. If there is no news for the source then display no news found. 

// HARDER MODE: 
// - Only display the sources which contains at least one news item. 


let articles = news.articles
let newsContainer = document.getElementById("newsContainer")

let articleArray = articles.map((article) => {
    let author = article.author ? article.author : "no author"
    let title = article.title ? article.title : "no title"
    let description = article.description ? article.description : "no desription"
    let url = article.url ? article.url : "no link"
    let urlToImage = article.urlToImage ? article.urlToImage : "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
    let publishedAt = article.publishedAt ? article.publishedAt : "no publisher"

    let articleDiv =
    `<div id="article">
        <p>${author}</p>
        <p>${title}</p>
        <p>${description}</p>
        <a href="${url}">Click here for full article</a>
        <img src="${urlToImage}"/>
        <p>${publishedAt}</p>
    </div>`

    return articleDiv
})

newsContainer.insertAdjacentHTML("beforeend", articleArray.join(""))