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

export type Ratings = Array<Array<[number, string]>>
