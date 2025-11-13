import { useState } from 'react'
import axios from 'axios'

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    message: '',
    isPublic: true
  })

  function handleChgange() {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({ ...formData, [e.target.name]: value })
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
          <div className="card p-4 bg-light shodow-lg">
            <div className="input-group mb-3">
              {/*author*/}
              <span className="input-group-text bg-primary text-light">Name</span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name='author'
                value={formData.author}
                onChange={handleChgange} />

              {/*title*/}
              <span className="input-group-text bg-primary text-light">Title</span>
              <input
                type="text"
                className="form-control"
                placeholder="Choose a title"
                name='title'
                value={formData.title}
                onChange={handleChgange} />
            </div>
            <div className="input-group mb-3">
              {/*message*/}
              <span className="input-group-text bg-primary text-light">Message</span>
              <textarea
                className="form-control"
                name='message'
                value={formData.message}
                onChange={handleChgange}></textarea>
            </div>

            <div className="form-check">
              {/*public*/}
              <input
                className="form-check-input"
                type="checkbox"
                checked={formData.isPublic}
                id="public"
                name='isPublic'
                onChange={handleChgange} />

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
