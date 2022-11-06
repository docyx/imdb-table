import { resJSON } from '../util'

export const config = {
  runtime: 'experimental-edge',
}

export default async (req: Request) => {
  const parsedURL = new URL(req.url)
  const params = new URLSearchParams(parsedURL.searchParams)

  const id = params.get('id')

  if (!id || !id?.trim()) return resJSON({ message: 'Missing IMDb ID' }, 400)

  const res = await fetch(
    `https://imdb.beuke.org/series.json?sql=select+*+from+series+where+parentTconst+%3D+%27${id}%27`
  )
  const json = await res.json()

  const rows = json.rows
  const seasons: [number, string][] = []

  for (const episode of rows) {
    const seasonNumber = parseInt(episode[2]) - 1

    if (isNaN(seasonNumber)) continue

    if (!seasons[seasonNumber]) {
      seasons[seasonNumber] = []
    }

    const episodeNumber = parseInt(episode[3]) - 1

    seasons[seasonNumber][episodeNumber] = [episode[6], episode[0]]
  }

  return resJSON(seasons, 200, {
    'cache-control': 'public, s-maxage=604800',
  })
}
