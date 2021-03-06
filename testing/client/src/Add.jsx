import { useEffect, useState } from 'react'
import axios from 'axios'
import './Add.css'
import { useParams } from 'react-router-dom'

function Add(props) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [subject, setSubject] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [thoughts, setThoughts] = useState('')

  const params = useParams()

  useEffect(() => {
    // if (params.id && props.items.length > 0) {
    if(params.id) {
      const itemToEdit = props.items.find(item => params.id === item.id)
      if (itemToEdit) {
        setTitle(itemToEdit.fields.title)
        setAuthor(itemToEdit.fields.author)
        setSubject(itemToEdit.fields.subject)
        setType(itemToEdit.fields.type)
        setStatus(itemToEdit.fields.status)
        setThoughts(itemToEdit.fields.thoughts)
      }
    }
  }, [params.id, props.items])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // axios post
    const newMedia = {
      title,
      author,
      subject,
      type,
      status,
      thoughts
    }
    if (params.id) {
      //axios.put
      await axios.put(`https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ/${params.id}`, { fields: newMedia })
    } else {
      //axios.post
      await axios.post("https://api.airtable.com/v0/appVJkVUZWavAw5go/catalog?api_key=keyVYuxU0tZerihYZ", { fields: newMedia })
    }
  }
// app - adding > nav -add-books > block1 > 1 - 2
// - 3 - 4 - block2 > 5 - 6 < button 
  
  return (
    <div className='add-area' >
      <form className='add-books'
      onSubmit={handleSubmit}
      >
        <div className='block1'>
          <label className='add-input-1' htmlFor='title'>Title:
          </label>
        <input
          className='add-input-2'
          type='text'
          placeholder='title: '
          value={title}
          id='title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
          <label className='add-input-3'
            htmlFor='author'>Author:
          </label>
        <input 
          type='text'
          className='add-input-4'
          placeholder='author: '
          value={author}
          id='author'
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
          <label className='add-input-5'
            htmlFor='subject'>Subject:
          </label>
        <input 
          type='subject'
          className='add-input-6'
          placeholder='subject: '
          value={subject}
          id='subject'
          onChange={(e) => setSubject(e.target.value)}
        />
          <br />
          <label  className='add-input-7'
            htmlFor='type'>Type:
          </label>
        <input 
          type='type'
          className='add-input-8'
          placeholder='type: '
          value={type}
          id='type'
          onChange={(e) => setType(e.target.value)}
        />
          <br />
          </div>
        <div className='block2'>
          <label className='add-input-9'
            htmlFor='type'>Status:
          </label>
        <input 
          type='type'
          className='add-input-10'
          placeholder='status: '
          value={status}
          id='status'
          onChange={(e) => setStatus(e.target.value)}
        />
        <br />
          <label  className='add-input-11'
            htmlFor='type'>thoughts:
          </label>
        <input 
          type='type'
          className='add-input-12'
          placeholder='thoughts: '
          value={thoughts}
          id='thoughts'
          onChange={(e) => setThoughts(e.target.value)}
        />
          <br />
          </div>
        <button
          // onClick={addToApi}
          className='add-button'
          type='submit'>Submit</button>
        </form>

    </div>
  )
}
// //li key={index}>
// {/* <Link to={`/detail/${props.media[index].id}`} media={media}> */}
//   {/* Title: {props.media[index].fields.title} */}


export default Add

