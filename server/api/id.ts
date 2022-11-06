import { resJSON } from '../util'

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  const parsedURL = new URL(req.url)
  const params = new URLSearchParams(parsedURL.searchParams)

  const tmdbID = params.get('id')

  if (!tmdbID || !tmdbID?.trim())
    return resJSON({ message: 'Missing TMDB ID' }, 400)

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tmdbID}/external_ids?api_key=${process.env.TMDB_API_KEY}`
  )
  const json = await res.json()

  return resJSON({ id: json.imdb_id }, 200, {
    'cache-control': 'public, s-maxage=2678400',
  })
}
