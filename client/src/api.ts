import type { SearchResult } from './types'

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:3000/api'
  : 'https://imdb-table.vercel.app/api'

const getJSONResponse = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`)
  return await res.json()
}

export const search = async (query: string): Promise<SearchResult[]> =>
  await getJSONResponse(`search?q=${query}`)

export const getInfo = async (tmdbID: string) =>
  await getJSONResponse(`info?id=${tmdbID}`)

export const getWatchTime = async (tmdbID: string) =>
  (await getJSONResponse(`watch-time?id=${tmdbID}`)).watchTime
