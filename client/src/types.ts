export interface AutocompleteItem {
  id: string
  label: string
  secondaryLabel?: string
}

export type Ratings = Array<Array<[number, string]>>
