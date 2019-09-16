import React,{Component} from 'react';

export class Add extends Component {

  constructor() {
    super()

    this.state = {
      title: '',
      genre: '',
      publisher: '',
      year: '',
      imgurl: ''
    }

    //add fetch for view all if desired
  }

  handleAddBookChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addBook = (e) => {
    let bookObj = {title: this.state.title, genre: this.state.genre, publisher: this.state.publisher, year: this.state.year, imgurl: this.state.imgurl}
    fetch('http://localhost:5000/add-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObj)
    })
  }



  render() {
    return <div>
      <h2>Add a Book</h2>
      <label>Title</label>
      <input name="title" type="text" onChange={this.handleAddBookChange}/>
      <label>Genre</label>
      <input name="genre" type="text" onChange={this.handleAddBookChange}/>
      <label>Publisher</label>
      <input name="publisher" type="text" onChange={this.handleAddBookChange}/>
      <label>Year</label>
      <input name="year" type="text" onChange={this.handleAddBookChange}/>
      <label>Image URL</label>
      <input name="imgurl" type="text" onChange={this.handleAddBookChange}/>
      <button onClick={this.addBook}>Add</button>
    </div>
  }
}

