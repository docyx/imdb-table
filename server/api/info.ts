import type { TMDbMediaPartial } from '../types'
import { resJSON } from '../util'

type TMDbMediaPartialWithExternalIDs = TMDbMediaPartial & {
  external_ids: {
    imdb_id: string
  }
}

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  const parsedURL = new URL(req.url)
  const params = new URLSearchParams(parsedURL.searchParams)

  const tmdbID = params.get('id')

  if (!tmdbID || !tmdbID?.trim())
    return resJSON({ message: 'Missing TMDb ID' }, 400)

  const infoRes = await fetch(
    `https://api.themoviedb.org/3/tv/${tmdbID}?append_to_response=external_ids&api_key=${process.env.TMDB_API_KEY}`
  )
  const infoJSON: TMDbMediaPartialWithExternalIDs = await infoRes.json()

  const res = await fetch(
    `https://imdb-table.taux.media/?tconst=${infoJSON.external_ids.imdb_id}`
  )
  const ratings = await res.json()

  return resJSON(
    {
      name: infoJSON.name,
      year: infoJSON.first_air_date
        ? new Date(infoJSON.first_air_date).getFullYear()
        : null,
      ratings,
    },
    200,
    {
      'cache-control': 'public, s-maxage=604800',
    }
  )
}
