import { useState } from 'react'
import axios from 'axios'

function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    message: '',
    isPublic: true
  })

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
                onChange={(e) => setFormData({ ...formData, author: e.target.value })} />

              {/*title*/}
              <span className="input-group-text bg-primary text-light">Title</span>
              <input
                type="text"
                className="form-control"
                placeholder="Choose a title"
                name='title'
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>
            <div className="input-group mb-3">
              {/*message*/}
              <span className="input-group-text bg-primary text-light">Message</span>
              <textarea
                className="form-control"
                name='message'
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
            </div>

            <div className="form-check">
              {/*public*/}
              <input
                className="form-check-input"
                type="checkbox"
                checked={formData.isPublic}
                id="public"
                name='isPublic'
                onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })} />

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
