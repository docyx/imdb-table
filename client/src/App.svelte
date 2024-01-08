<script lang="ts">
import { isEqual } from 'lodash-es'
import { onMount, tick } from 'svelte'
import { getInfo, getWatchTime, search } from './api'
import Autocomplete from './components/Autocomplete.svelte'
import Corner from './components/Corner.svelte'
import Table from './components/Table.svelte'
import { COLORBLIND_COLORS, DEFAULT_COLORS } from './constants'
import { colors } from './stores'
import type { AutocompleteItem, Info } from './types'

let isColorblind = isEqual($colors, COLORBLIND_COLORS)

let inputEl: HTMLInputElement | null = null
let loading = false
let info: Info | null = null
let watchTime: number | null = null

$: watchTimeDays = watchTime ? Math.floor(watchTime / 60 / 24) : 0
$: watchTimeHours = watchTime ? Math.round((watchTime / 60) % 24) : 0

onMount(async () => {
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')

  if (id) await load(id, true)
  else inputEl?.focus()
})

const slugify = (text: string) => {
  return text.replace(/[\W]+/g, '-').toLowerCase()
}

const onPopState = () => {
  if (location.search) {
    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')

    if (id) load(id, true)
    return
  }

  info = null
  watchTime = null

  tick().then(() => inputEl?.focus())
}

const getAutocompletions = async (
  query: string,
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
  info = null
  watchTime = null

  history.pushState({}, '', import.meta.env.BASE_URL)

  await tick()
  inputEl?.focus()
}

const load = async (tmdbID: string, replaceURL = false) => {
  try {
    loading = true

    const [infoRes, watchTimeRes] = await Promise.allSettled([
      getInfo(tmdbID),
      getWatchTime(tmdbID),
    ])

    if (infoRes.status !== 'fulfilled') throw new Error('Failed to get info')

    info = infoRes.value

    if (watchTimeRes.status === 'fulfilled') watchTime = watchTimeRes.value

    loading = false

    const params = new URLSearchParams(location.search)
    params.set('id', tmdbID)

    history[replaceURL ? 'replaceState' : 'pushState'](
      {},
      '',
      `${location.href.split('?')[0]}?${params}#/${slugify(info!.name)}`,
    )
  } catch {
    loading = false
  }
}
</script>

<svelte:window on:popstate={onPopState} />

<Corner />

<main class="min-h-[90vh] flex m-auto">
  {#if loading}
    <p class="m-auto">Loading...</p>
  {:else if info}
    <div class="text-center py-4 m-auto">
      <div class="flex items-center justify-center">
        <h1 class="text-3xl font-semibold">
          {info.name}

          {#if info.year}
            <span class="text-neutral-400">({info.year})</span>
          {/if}
        </h1>
      </div>

      <div class="mt-4">
        {#if info.ratings.length}
          <Table ratings={info.ratings} />
        {:else}
          <p class="text-neutral-400 my-10">No ratings found :&lpar;</p>
        {/if}
      </div>

      {#if watchTime}
        <div class="bg-neutral-700 rounded-full inline-block px-3 py-1 mb-6">
          <p>
            Watch time: <span class="font-semibold"
              >{watchTimeDays}d {watchTimeHours}h</span
            >
          </p>
        </div>
      {/if}

      <nav class="flex flex-col space-y-3">
        <button
          class="bg-transparent text-yellow-400"
          on:click={() => {
            navigator.clipboard.writeText(location.href)
          }}>📋 Copy link</button
        >

        <button class="bg-transparent text-yellow-400" on:click={onGoBackClick}
          >⬅️ Go back</button
        >
      </nav>
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
</main>
