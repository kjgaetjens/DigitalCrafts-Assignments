import React,{Component} from 'react';
import './App.css';

export class View extends Component {

  constructor() {
    super()

    this.state = {
      books: [],
      genres: [],
      selectedGenre: 'View All'
    }

    this.viewBook()
  }

  viewBook = async () => {
      let result = await fetch('http://localhost:5000/', {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          },
      })
      let jsonObj = await result.json()

      let genreList = [...new Set(jsonObj.map(x => x.genre))]

      this.setState({
          books: jsonObj,
          genres: genreList
      }) 
  }

  updateFilterSelected = (event) => {
    console.log(event.target.value)
    this.setState({
      selectedGenre: event.target.value
    })
  }

  render() {
    let filteredBooks = this.state.books
    if (this.state.selectedGenre !== 'View All') {
      filteredBooks = this.state.books.filter(book => {
        return book.genre === this.state.selectedGenre
      })
    }
    let filteredBooksOptions = this.state.genres.map(genre => {
      return <option value={genre}>{genre}</option>
    })

    let bookItems = filteredBooks.map(book => {
        return (
          <div>
            <h2>{book.title}</h2>
            <h3>{book.genre}</h3>
            <h3>{book.publisher}</h3>
          </div>
        )
    })
    //add a ddl with an on change function that updates the state above?
    return <div>
        <h1>View Books</h1>
        <h2>Sort by Genre</h2>
        <select onChange={this.updateFilterSelected} value={this.state.selectedGenre}>
          <option value="View All">View All</option>
          {filteredBooksOptions}
        </select>
        
        <div>{bookItems}</div>
    </div>
  }
}
