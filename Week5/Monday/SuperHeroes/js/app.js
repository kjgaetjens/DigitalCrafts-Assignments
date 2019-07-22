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
let detailList = document.getElementById('movie-details')

let req = new XMLHttpRequest()
req.open('GET', batmanURL)

const displayDetails = url => {
    let detailURL = url
    let detailreq = new XMLHttpRequest()
    detailreq.open('GET', detailURL)

    detailreq.addEventListener('load', () => {
        let details = JSON.parse(event.currentTarget.responseText)
        let detailLI = `<li class="movie">
            <div>
                <h2>${details.Title}</h2>
            </div>
            <div>
                <img class="movie-poster" src="${details.Poster}"/>
            </div>
            <div>
                <h3>Year: ${details.Year}</h3>
                <h3>Rated: ${details.Rated}</h3>
                <h3>Released: ${details.Released}</h3>
                <h3>Director: ${details.Director}</h3>
            </div>
        </li>
        `
        detailList.innerHTML = detailLI
    })
    detailreq.send()
}

//pull in object array
req.addEventListener('load', () => {
    let moviesObject = JSON.parse(event.currentTarget.responseText)
    let movies = moviesObject.Search
    let movieLIs = movies.map(movie => {
        return `<li class="movie">
                    <div>
                        <img class="movie-poster" src="${movie.Poster}"/>
                    </div>
                    <div>
                        <a class="movie-link" href=#movie-details onclick="displayDetails('http://www.omdbapi.com/?i=${movie.imdbID}&apikey=91f2fc7')">${movie.Title}</a>
                    </div>
                </li>
                `
    })
    movieList.innerHTML = movieLIs.join('')
})





req.send()