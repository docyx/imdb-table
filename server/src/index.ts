import { getRatings } from './db'
import { getInfo, getWatchTime, search, simplifyMediaObject } from './tmdb'
import type { Env } from './types'

export default <ExportedHandler<Env>>{
  async fetch(request, env, ctx) {
    const { pathname, searchParams } = new URL(request.url)

    let res = await caches.default.match(request)

    if (res && !env.IS_DEV) return res

    switch (pathname) {
      case '/search': {
        const query = searchParams.get('q')

        if (!query?.trim()) {
          res = Response.json({ message: 'Missing query' }, { status: 400 })
          break
        }

        try {
          res = Response.json(await search(env.TMDB_API_KEY, query))
        } catch {
          res = Response.json({ message: 'Search failed' }, { status: 500 })
        }

        break
      }
      case '/info': {
        const tmdbId = searchParams.get('id')

        if (!tmdbId?.trim()) {
          res = Response.json({ message: 'Missing ID' }, { status: 400 })
          break
        }

        let media: Awaited<ReturnType<typeof getInfo>>

        try {
          media = await getInfo(env.TMDB_API_KEY, tmdbId)
        } catch {
          res = Response.json(
            { message: 'Failed to get info' },
            { status: 500 }
          )
          break
        }

        const [ratings, watchTime] = await Promise.allSettled([
          getRatings(env, media.external_ids.imdb_id),
          getWatchTime(env.TMDB_API_KEY, tmdbId, media.number_of_seasons),
        ])

        res = Response.json({
          ...simplifyMediaObject(media),
          ratings: ratings.status === 'fulfilled' ? ratings.value : null,
          watchTime: watchTime.status === 'fulfilled' ? watchTime.value : null,
        })

        break
      }
      default: {
        res = Response.json({ message: 'Not found' }, { status: 404 })
      }
    }

    res.headers.append(
      'access-control-allow-origin',
      env.IS_DEV ? '*' : 'https://docyx.github.io'
    )

    if (!env.IS_DEV) {
      res.headers.append('cache-control', 's-maxage=2629800')

      ctx.waitUntil(caches.default.put(request, res.clone()))
    }

    return res
  },
}
