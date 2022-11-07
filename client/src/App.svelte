<script lang="ts">
import { onMount, tick } from 'svelte'
import { getIMDbID, getRatings, search } from './api'
import { colors } from './stores'
import type { AutocompleteItem, Ratings } from './types'
import Autocomplete from './components/Autocomplete.svelte'
import Corner from './components/Corner.svelte'
import Table from './components/Table.svelte'
import { COLORBLIND_COLORS, DEFAULT_COLORS } from './constants'

// NOTE: Probably (definitely) faster than _.isEqual so we'll just leave it.
let isColorblind =
  $colors[0] === COLORBLIND_COLORS[0] &&
  $colors[1] === COLORBLIND_COLORS[1] &&
  $colors[2] === COLORBLIND_COLORS[2] &&
  $colors[3] === COLORBLIND_COLORS[3]

let inputEl: HTMLInputElement | null = null
let loading = false
let ratings: Ratings = []

onMount(async () => {
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  if (id) await load(id)
  else inputEl?.focus()
})

const onPopState = () => {
  if (location.search) {
    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')

    if (id) load(id)
    return
  }

  ratings = []

  tick().then(() => inputEl?.focus())
}

const getAutocompletions = async (
  query: string
): Promise<AutocompleteItem[]> => {
  const searchResults = await search(query)

  return searchResults.map((res) => ({
    id: res.id,
    label: res.title,
    secondaryLabel: res.year?.toString(),
  }))
}

const onAutocompleteClick = async (e: CustomEvent<string>) =>
  await load(e.detail)

const onColorblindToggle = ({ currentTarget }: Event) => {
  if ((currentTarget as HTMLInputElement).checked) $colors = COLORBLIND_COLORS
  else $colors = DEFAULT_COLORS
}

const onGoBackClick = async () => {
  ratings = []

  history.pushState({}, '', import.meta.env.BASE_URL)

  await tick()
  inputEl?.focus()
}

const load = async (tmdbID: string) => {
  try {
    loading = true

    const imdbID = await getIMDbID(tmdbID)

    if (!imdbID) {
      loading = false
      return
    }

    const ratingsRes = await getRatings(imdbID)

    loading = false
    ratings = ratingsRes

    const params = new URLSearchParams(location.search)
    params.set('id', tmdbID)

    history.pushState({}, '', `${location.href.split('?')[0]}?${params}`)
  } catch {
    loading = false
  }
}
</script>

<svelte:window on:popstate={onPopState} />

<Corner />

<div class="min-h-[90vh] flex m-auto">
  {#if loading}
    <p class="m-auto">Loading...</p>
  {:else if ratings.length}
    <div class="text-center py-4 m-auto">
      <Table {ratings} />

      <div class="flex flex-col mt-4 space-y-3">
        <button
          class="bg-transparent text-yellow-400"
          on:click={() => {
            navigator.clipboard.writeText(location.href)
          }}>📋 Copy link</button
        >

        <button class="bg-transparent text-yellow-400" on:click={onGoBackClick}
          >⬅️ Go back</button
        >
      </div>
    </div>
  {:else}
    <div class="m-auto">
      <h1 class="text-5xl font-bold mb-4 text-center">IMDb Table</h1>

      <Autocomplete
        placeholder="TV show name"
        {getAutocompletions}
        on:autocomplete-click={onAutocompleteClick}
        bind:inputEl
      />

      <div class="flex items-center justify-center mt-4">
        <label class="flex items-center space-x-1.5">
          <input
            type="checkbox"
            bind:checked={isColorblind}
            on:change={onColorblindToggle}
            class="accent-yellow-400 border border-red-400"
          />
          <p class="text-neutral-400">Colorblind mode</p>
        </label>
      </div>
    </div>
  {/if}
</div>
