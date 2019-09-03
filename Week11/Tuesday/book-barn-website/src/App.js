/*
You are responsible to create the Book Barn website. Create React components for header, footer, main content, language etc. 
Your data will come from a JSON file which is hosted here: 
https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json
Below you can find a sample books website. 
*/

import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import BookList from './BookList'
import Languages from './Languages'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: [],
      languages: []
    }

    this.fetchBooks()
  }

  fetchBooks = async () => {
    let response = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    let jsonResponse = await response.json()

    let languageList = [...new Set(jsonResponse.map(x => x.language))]
    console.log(languageList)

    this.setState({
      books: jsonResponse,
      languages: languageList
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main-container">
          <BookList books = {this.state.books}/>
          <Languages languages = {this.state.languages} />
        </div>
        <Footer />

      </div>
    )
  }

}

export default App;
