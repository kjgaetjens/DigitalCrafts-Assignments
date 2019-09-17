import React,{Component, useState} from 'react';
import axios from 'axios';


export function Add() {
  const [newBook, setNewBook] = useState({title: '', genre: '', publisher: '', year: '', imgurl: ''})

  const handleAddBookChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value
    })
  }

  const addBook = (e) => {
    let bookObj = {title: newBook.title, genre: newBook.genre, publisher: newBook.publisher, year: newBook.year, imgurl: newBook.imgurl}
    axios.post('http://localhost:5000/books/add-book', bookObj)
  }


  return (<div>
    <h2>Add a Book</h2>
    <label>Title</label>
    <input name="title" type="text" onChange={(e) => handleAddBookChange(e)}/>
    <label>Genre</label>
    <input name="genre" type="text" onChange={(e) => handleAddBookChange(e)}/>
    <label>Publisher</label>
    <input name="publisher" type="text" onChange={(e) => handleAddBookChange(e)}/>
    <label>Year</label>
    <input name="year" type="text" onChange={(e) => handleAddBookChange(e)}/>
    <label>Image URL</label>
    <input name="imgurl" type="text" onChange={(e) => handleAddBookChange(e)}/>
    <button onClick={() => addBook()}>Add</button>
  </div>)
}

