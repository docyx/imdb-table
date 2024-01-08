export interface AutocompleteItem {
  id: string
  label: string
  secondaryLabel?: string
}

export interface SearchResult {
  id: string
  title: string
  year?: number
}

export type Ratings = Array<Array<[string, number]>>

export interface Info {
  name: string
  year?: number
  ratings: Ratings
}

export type Colors = [string, string, string, string]
