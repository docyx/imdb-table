export interface Env {
  RATINGS: D1Database

  TMDB_API_KEY: string
  IS_DEV?: string
}

export type Rating = [string, number]

export interface TMDbMediaPartial {
  id: string
  name: string
  number_of_seasons: number
  first_air_date?: string
}

export interface SimpleMedia {
  id: string
  name: string
  year: number | null
}

export type Info = SimpleMedia & {
  ratings: Rating[][]
  watchTime: number
}
