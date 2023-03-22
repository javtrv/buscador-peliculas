import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MovieList from './components/MovieList'

function App () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    if (fields.movies === '') {
      setError(true)
      return
    }
    console.log(fields.movies)
    setSearch(fields.movies)
  }

  const handleChange = (e) => {
    if (e.target.value === '') {
      setError(true)
    } else {
      setError(false)
      setSearch(e.target.value)
    }
  }

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Buscardor de Peliculas - Clase 4</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} name='movies' type='text' placeholder='Matrix, Harry Potter...' />
          {error && <span className='error'>Ingrese una pelicula a buscar!</span>}
          <button type='submit'>Buscar</button>
        </form>
      </div>
      <MovieList search={search} />
    </div>
  )
}

export default App
