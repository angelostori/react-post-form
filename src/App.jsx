import { useState } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

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
            <div class="input-group mb-3">
              <span class="input-group-text" id="author">Name</span>
              <input type="text" class="form-control" placeholder="Username" />

              <span class="input-group-text" id="title">Title</span>
              <input type="text" class="form-control" placeholder="Choose a title" />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id='body'>Message</span>
              <textarea class="form-control"></textarea>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="public" checked />
              <label class="form-check-label" forHtml="public">
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
