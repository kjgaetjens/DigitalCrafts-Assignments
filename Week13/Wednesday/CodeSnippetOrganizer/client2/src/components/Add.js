import React,{Component, useState} from 'react';


export function Add() {
  const [newSnippet, setNewSnippet] = useState({title: '', body: '', tag: ''})

  const handleAddSnippetChange = (e) => {
    setNewSnippet({
      ...newSnippet,
      [e.target.name]: e.target.value
    })
  }

  const addSnippet = (e) => {
    let snippetObj = {title: newSnippet.title, body: newSnippet.body, tag: newSnippet.tag}
    fetch('http://localhost:3001/add-snippet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(snippetObj)
    })
  }


  return (<div>
    <h2>Add a Snippet</h2>
    <label>Title</label>
    <input name="title" type="text" onChange={(e) => handleAddSnippetChange(e)}/>
    <label>Body</label>
    <textarea name="body" rows="20" cols="100" onChange={(e) => handleAddSnippetChange(e)}></textarea>
    <label>Tag</label>
    <input name="tag" type="text" onChange={(e) => handleAddSnippetChange(e)}/>
    <button onClick={() => addSnippet()}>Add</button>
  </div>)
}

