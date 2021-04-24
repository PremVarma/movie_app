import axios from 'axios'

export const truncStr = (string: string, limit: number) => {
  return string.length > limit
    ? string
        .trim()
        .substring(0, limit - 3)
        .trim() + '...'
    : string
}

const makeRequestCreator = () => {
  return async (query: string) => {
    try {
      const res = await axios.get(query)
      const result = res.data.results
      return result
    } catch (error) {
      console.log('Something went wrong: ', error.message)
    }
  }
}

export const search_movie = makeRequestCreator()
