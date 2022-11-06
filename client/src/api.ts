interface SearchResult {
  id: string
  title: string
  year?: number
}

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:3000/api'
  : 'https://imdb-table.vercel.app/api'

const getJSONResponse = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`)
  return await res.json()
}

export const search = async (query: string): Promise<SearchResult[]> =>
  await getJSONResponse(`search?q=${query}`)

export const getIMDbID = async (tmdbID: string) =>
  (await getJSONResponse(`id?id=${tmdbID}`)).id

export const getRatings = async (imdbID: string) =>
  await getJSONResponse(`ratings?id=${imdbID}`)
