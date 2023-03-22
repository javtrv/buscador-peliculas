import { useState } from 'react'
import { getMovies } from '../service/getMovies'

export const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(null)

  const updateMovies = ({ search }) => {
    setLoading(true)
    getMovies({ search }).then(res => {
      setMovies(res)
      setLoading(false)
    })
  }

  return [movies, updateMovies, loading]
}
