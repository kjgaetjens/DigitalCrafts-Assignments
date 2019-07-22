// You have just been hired to create a page for super heroes. You will use the http://www.omdbapi.com/ API to get information related to your favorite super hero. 

// OMDB API requires a key to be sent each time you are requesting a resource (url). 

// The following URL will give you all the movies related to Batman: 
// http://www.omdbapi.com/?s=batman&apikey=insertyourkeyhere

// The following URL will give you details about the movie: 
// http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=insertyourkeyhere 

 
// Feel free to use your design skills to create an amazing experience. 
// * Don't forget to make your website responsive
// * You can also make your page take movie name input and then send it as part of the request. 



let batmanURL = "http://www.omdbapi.com/?s=batman&apikey=91f2fc7"
let movieList = document.getElementById('movie-list')

let req = new XMLHttpRequest()
req.open('GET', batmanURL)

//pull in object array
req.addEventListener('load', () => {
    let moviesObject = JSON.parse(event.currentTarget.responseText)
    let movies = moviesObject.Search
    console.log(movies)
    let movieLIs = movies.map(movie => {
        return `<li class="movie">
                    <div>
                        <img class="movie-poster" src="${movie.Poster}"/>
                    </div>
                    <div>
                        <a class="movie-link" href="http://www.omdbapi.com/?i=${movie.imdbID}&apikey=91f2fc7">${movie.Title}</a>
                    </div>
                </li>
                `
    })
    movieList.innerHTML = movieLIs.join('')
})





req.send()