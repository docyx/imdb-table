import type { TMDbMediaPartial } from '../types'
import { resJSON } from '../util'

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  const parsedURL = new URL(req.url)
  const params = new URLSearchParams(parsedURL.searchParams)

  const query = params.get('q')

  if (!query || !query?.trim())
    return resJSON({ message: 'Missing query' }, 400)

  const normalizedQuery = query.toLowerCase().trim()
  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${normalizedQuery}&api_key=${process.env.TMDB_API_KEY}`
  )
  const json = await res.json()

  return resJSON(
    json.results.map((media: TMDbMediaPartial) => ({
      id: media.id,
      title: media.name,
      year: media.first_air_date
        ? new Date(media.first_air_date).getFullYear()
        : null,
    })),
    200,
    { 'cache-control': 'public, s-maxage=604800' }
  )
}
