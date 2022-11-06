export interface AutocompleteItem {
  id: string
  label: string
  secondaryLabel?: string
}

export type Colors = [string, string, string, string]

export type Ratings = Array<Array<[number, string]>>
