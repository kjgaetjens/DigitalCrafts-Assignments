import React, {useState, useEffect} from 'react';
import './App.css';

export function View() {

  const [bookList, setBookList] = useState({books: []})
  const [genreList, setGenreList] = useState({genres: []})
  const [selectedGenre, setSelectedGenre] = useState({selectedGenre: 'View All'})

  //might need to update this
  useEffect(() => {
    viewBook();
  },[])

  const viewBook = async () => {
      let result = await fetch('http://localhost:5000/books/view', {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          },
      })
      let jsonObj = await result.json()

      let genreList = [...new Set(jsonObj.map(x => x.genre))]

      setBookList({
          books: jsonObj
      }) 
      setGenreList({
        genres: genreList
      })
  }

  const updateFilterSelected = (e) => {
    setSelectedGenre({
      selectedGenre: e.target.value
    });
  }

  return (
  <div>
      <h1>View Books</h1>
      <h2>Sort by Genre</h2>
      <select onChange={(e) => updateFilterSelected(e)} value={selectedGenre.selectedGenre}>
        <option value="View All">View All</option>
        {genreList.genres.map(genre => {
          return <option value={genre}>{genre}</option>
          })}
      </select>
      
      <div>
      {  bookList.books.filter(book => {
          if (selectedGenre.selectedGenre === 'View All') {
            return book
          } else {
            return book.genre === selectedGenre.selectedGenre
          }
        }).map(book => {
          return (
                <div>
                  <h2>{book.title}</h2>
                  <h3>{book.genre}</h3>
                  <h3>{book.publisher}</h3>
                </div>
              )
        })}
      </div>
  </div>
  )
}


