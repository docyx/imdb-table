import type { Env, Rating } from './types'

export const getRatings = async (env: Env, imdbId: string) => {
  const { results } = await env.RATINGS.prepare(
    'SELECT tconst, averageRating, seasonNumber FROM episodes_ratings WHERE parentTconst = ? ORDER BY seasonNumber ASC, episodeNumber ASC'
  )
    .bind(imdbId)
    .all<any>()

  let currentSeason = 1
  const ratings: Rating[][] = [[]]

  for (const result of results) {
    if (result.seasonNumber > currentSeason) {
      ratings.push([])

      currentSeason += 1
    }

    ratings[currentSeason - 1].push([result.tconst, result.averageRating])
  }

  return ratings
}
