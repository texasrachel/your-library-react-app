// import axios from 'axios'
import { useState } from 'react'

function Add(props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [subject, setSubject] = useState('')
  // const [newMedia, setNewMedia] = useState([])?????{}
  
// not working - not adding to airtable
  const addToApi = () => {
    console.log(title)
    console.log(author)
    console.log(subject)
  }

  return (
    <>
    <p>Adding</p>
      <form className='add-books'
      // onSubmit={handleSubmit}
      >
        <label htmlFor='title'>Title: </label>
        <input 
          type='text'
          placeholder='title'
          value={title}
          id='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
      <label htmlFor='author'>Author: </label>
        <input 
          type='text'
          placeholder='author'
          value={author}
          id='author'
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <label htmlFor='subject'>Subject: </label>
        <input 
          type='subject'
          placeholder='subject'
          value={subject}
          id='subject'
          onChange={(e) => setSubject(e.target.value)}
        />
        <br />
   
        <button onClick={ addToApi } type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Add


// const handleSubmit = (e) => {
// e.preventDefault()
// const addMedia = {
// title,
// author,
// subject}
// setNewMedia([..newMedia, addMedia])}
//   -----or---------
// props.passedSearchFromApp({
// title,
// author,
// subject, 
// })
// setTitle('')
// setAuthor('')
// setSubject('')

// const addToApi = () => {
// axios.post(baseURL, config,{
// title,
// author,
// subject
// }) }