import { useState } from 'react'
import axios from 'axios'

function App() {
  const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts'


  const initialFormData = {
    author: '',
    title: '',
    body: '',
    public: true
  }

  const [formData, setFormData] = useState(initialFormData)
  const [message, setMessage] = useState(null)

  function handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({ ...formData, [e.target.name]: value })
  }

  function handleSubmit(e) {

    if (!formData.author || !formData.title || !formData.body) {
      setMessage('Compila tutti i campi prima di inviare!')
      return
    }

    e.preventDefault()
    console.log('Dati inviati:', formData)

    axios.post(endpoint, formData, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log('Risposta dal server:', response)
        if (response.status === 201) {
          setMessage('Post inviato con successo!')
        } else {
          setMessage('Qualcosa è andato storto, riprova.')
        }
        setFormData(initialFormData)
      })
      .catch(err => {
        console.error('Errore:', err.message)
        setMessage('Errore durante l\'invio del post.')
      })
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

            <form onSubmit={handleSubmit}>

              <div className="input-group mb-3">
                {/*author*/}
                <span className="input-group-text bg-primary text-light">Name</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name='author'
                  value={formData.author}
                  onChange={handleChange} />

                {/*title*/}
                <span className="input-group-text bg-primary text-light">Title</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Choose a title"
                  name='title'
                  value={formData.title}
                  onChange={handleChange} />
              </div>

              <div className="input-group mb-3">

                {/*message*/}
                <span className="input-group-text bg-primary text-light">Message</span>
                <textarea
                  className="form-control"
                  name='body'
                  value={formData.body}
                  onChange={handleChange}></textarea>

              </div>

              <div className="form-check d-flex justify-content-between">

                <div>
                  {/*public*/}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={formData.public}
                    id="public"
                    name='public'
                    onChange={handleChange} />
                  <label className="form-check-label" htmlFor="public">
                    Public message
                  </label>
                </div>

                <button type="submit" className="btn btn-primary">
                  Invia Post
                </button>

              </div>

            </form>

            {/* messaggio di feedback */}
            {message && (
              <div className="alert alert-info mt-3" role="alert">
                {message}
              </div>
            )}

          </div>
        </div>
      </main>

    </>
  )
}

export default App
