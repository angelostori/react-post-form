import { useState } from 'react'
import axios from 'axios'

function App() {
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [isPublic, setIsPublic] = useState(false)

  const handleCheckboxChange = () => {
    setIsPublic(!isPublic)
  }

  return (
    <>
      <header>
        <div className='container'>
          <h1>Andiamo</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="card p-4">
            <div className="input-group mb-3">
              {/*author*/}
              <span className="input-group-text" id="author">Name</span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={author}
                onChange={(e) => setAuthor(e.target.value)} />

              {/*title*/}
              <span className="input-group-text" id="title">Title</span>
              <input
                type="text"
                className="form-control"
                placeholder="Choose a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-group mb-3">
              {/*message*/}
              <span className="input-group-text" id='body'>Message</span>
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <div className="form-check">
              {/*public*/}
              <input
                className="form-check-input"
                type="checkbox"
                checked={isPublic}
                id="public"
                onChange={handleCheckboxChange} />

              <label className="form-check-label" htmlFor="public">
                Public message
              </label>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
