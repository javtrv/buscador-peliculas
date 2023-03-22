const API_KEY = 'b79cedc9'
const URL_MOVIE = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`

export function getMovies ({ search }) {
  return fetch(`${URL_MOVIE}${search}`)
    .then(resp => resp.json())
    .then(res => {
      if (res.Response === 'False') return []
      const moviesMap = res.Search.map(movie => {
        return {
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster
        }
      }
      )
      return moviesMap
    })
}
