<script lang="ts">
import { onMount, tick } from 'svelte'
import { getIMDbID, getRatings, search } from './api'
import type { AutocompleteItem, Ratings } from './types'
import Autocomplete from './components/Autocomplete.svelte'
import Corner from './components/Corner.svelte'
import Table from './components/Table.svelte'

let inputEl: HTMLInputElement | null = null
let loading = false
let ratings: Ratings = []

onMount(async () => {
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  if (id) await load(id)
  else inputEl?.focus()
})

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
        {getAutocompletions}
        on:autocomplete-click={onAutocompleteClick}
        bind:inputEl
      />
    </div>
  {/if}
</div>
