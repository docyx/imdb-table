import { resJSON } from '../util'

export const config = {
  runtime: 'experimental-edge',
}

const getSeasonWatchTime = async (
  tmdbID: string,
  season: number
): Promise<number> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tmdbID}/season/${season}?api_key=${process.env.TMDB_API_KEY}`
  )
  const json = await res.json()

  return json.episodes.reduce(
    (total: number, episode: any) => total + episode.runtime,
    0
  )
}

export default async (req: Request) => {
  const parsedURL = new URL(req.url)
  const params = new URLSearchParams(parsedURL.searchParams)

  const tmdbID = params.get('id')

  if (!tmdbID || !tmdbID?.trim())
    return resJSON({ message: 'Missing TMDb ID' }, 400)

  const infoRes = await fetch(
    `https://api.themoviedb.org/3/tv/${tmdbID}?api_key=${process.env.TMDB_API_KEY}`
  )
  const { number_of_seasons: numSeasons } = await infoRes.json()

  const seasonWatchTimeGetters = [...Array(numSeasons)].map((_, i) =>
    getSeasonWatchTime(tmdbID, i + 1)
  )

  const watchTimes = await Promise.allSettled(seasonWatchTimeGetters)

  const watchTime = watchTimes.reduce(
    (total, current) =>
      current.status === 'fulfilled' ? total + current.value : total,
    0
  )

  return resJSON({ watchTime }, 200, {
    'cache-control': 'public, s-maxage=604800',
  })
}
