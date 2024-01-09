import type { SimpleMedia } from '@api-types'

const BASE_URL = import.meta.env.DEV
  ? 'http://localhost:8787'
  : 'https://imdb-table.taux.media'

const getJsonResponse = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`)
  return await res.json()
}

export const search = async (query: string): Promise<SimpleMedia[]> =>
  await getJsonResponse(`search?q=${query}`)

export const getInfo = async (tmdbID: string) =>
  await getJsonResponse(`info?id=${tmdbID}`)
