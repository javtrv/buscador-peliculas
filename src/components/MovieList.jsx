import { useEffect, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { useMovies } from '../hooks/useMovies'

const MovieList = ({ search }) => {
  const [movies, updateMovies, loading] = useMovies()

  const debouncedGetMovies = useCallback(
    debounce(search => {
      updateMovies({ search })
    }, 900)
    , []
  )

  useEffect(() => {
    if (!search) return
    debouncedGetMovies(search)
  }, [search])

  return (
    <>
      {loading
        ? <p>Cargando...</p>
        : (
          <section className='movie-grid'>
            {movies?.length === 0
              ? <p>No hay peliculas</p>
              : (
                <>
                  {movies.map((movie) => (
                    <div key={movie.id}>
                      <img src={movie.poster} alt={movie.title} />
                      <p>{movie.title} ({movie.year})</p>
                    </div>
                  ))}
                </>
                )}
          </section>
          )}
    </>
  )
}

export default MovieList
