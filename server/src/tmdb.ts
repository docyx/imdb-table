import type { SimpleMedia, TMDbMediaPartial } from './types'

const fetchTmdb = async <T>(
  apiKey: string,
  endpoint: string,
  queryParams: Record<string, string> = {}
) => {
  const searchParams = new URLSearchParams({
    api_key: apiKey,
    ...queryParams,
  })

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?${searchParams}`
  )

  return await res.json<T>()
}

export const simplifyMediaObject = (media: TMDbMediaPartial): SimpleMedia => ({
  id: media.id,
  name: media.name,
  year: media.first_air_date
    ? new Date(media.first_air_date).getFullYear()
    : null,
})

export const search = async (apiKey: string, query: string) => {
  const { results } = await fetchTmdb<{ results: TMDbMediaPartial[] }>(
    apiKey,
    'search/tv',
    {
      query,
    }
  )

  return results.map((result) => simplifyMediaObject(result))
}

export const getInfo = (apiKey: string, tmdbId: string) =>
  fetchTmdb<TMDbMediaPartial & { external_ids: { imdb_id: string } }>(
    apiKey,
    `tv/${tmdbId}`,
    {
      append_to_response: 'external_ids',
    }
  )

const getSeasonWatchTime = async (
  apiKey: string,
  tmdbId: string,
  season: number
): Promise<number> => {
  const { episodes } = await fetchTmdb<{
    episodes: Array<{ runtime: number }>
  }>(apiKey, `tv/${tmdbId}/season/${season}`)

  return episodes.reduce(
    (total: number, episode: any) => total + episode.runtime,
    0
  )
}

export const getWatchTime = async (
  apiKey: string,
  tmdbId: string,
  numSeasons: number
) => {
  const seasonWatchTimeGetters = [...Array(numSeasons)].map((_, i) =>
    getSeasonWatchTime(apiKey, tmdbId, i + 1)
  )

  const watchTimes = await Promise.allSettled(seasonWatchTimeGetters)

  return watchTimes.reduce(
    (total, current) =>
      current.status === 'fulfilled' ? total + current.value : total,
    0
  )
}
