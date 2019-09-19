import React, {useState, useEffect} from 'react';

export function View() {

  const [snippetList, setSnippetList] = useState({snippets: []})
  const [tagList, setTagList] = useState({tags: []})
  const [selectedTag, setSelectedTag] = useState({selectedTag: 'View All'})

  //should probably update app so that view refreshes when add is executed
  //need to add edit functionality
  
  useEffect(() => {
    viewSnippet();
  },[])

  const viewSnippet = async () => {
      let result = await fetch('http://localhost:3001/view-snippets', {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          },
      })
      let jsonObj = await result.json()

      let tagList = [...new Set(jsonObj.map(x => x.tag))]

      setSnippetList({
          snippets: jsonObj
      }) 
      setTagList({
        tags: tagList
      })
  }

  const updateFilterSelected = (e) => {
    setSelectedTag({
      selectedTag: e.target.value
    });
  }

  const deleteSnippet = (snippetId) => {
    fetch('http://localhost:3001/delete-snippet', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({snippetId: snippetId})
    })
    viewSnippet()
  }

  return (
  <div>
      <h1>View Snippets</h1>
      <h2>Sort by Tag</h2>
      <select onChange={(e) => updateFilterSelected(e)} value={selectedTag.selectedTag}>
        <option value="View All">View All</option>
        {tagList.tags.map(tag => {
          return <option value={tag}>{tag}</option>
          })}
      </select>
      
      <div>
      {  snippetList.snippets.filter(snippet => {
          if (selectedTag.selectedTag === 'View All') {
            return snippet
          } else {
            return snippet.tag === selectedTag.selectedTag
          }
        }).map(snippet => {
          return (
                <div>
                  <h2>{snippet.title}</h2>
                  <h4>{snippet.tag}</h4>
                  <textarea rows="20" cols="100" readOnly>{snippet.body}</textarea><br/>
                  {/* could move into another component */}
                  <button onClick={() => deleteSnippet(snippet._id)}>Delete</button>
                </div>
              )
        })}
      </div>
  </div>
  )
}


