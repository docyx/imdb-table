<script lang="ts">
import { debounce } from 'lodash-es'
import { createEventDispatcher } from 'svelte'
import type { AutocompleteItem } from '../types'

export let placeholder: string | null = null
export let inputEl: HTMLInputElement | null = null
export let getAutocompletions: (query: string) => Promise<AutocompleteItem[]>

const dispatch = createEventDispatcher()

let input = ''
let autocompletions: AutocompleteItem[] = []
let showAutocomplete = false

const onInput = debounce(() => {
  if (input === '') {
    autocompletions = []
    return
  }

  getAutocompletions(input).then(
    (completions) => (autocompletions = completions)
  )
}, 300)
</script>

<div class="relative">
  <input
    type="text"
    bind:this={inputEl}
    bind:value={input}
    on:input={onInput}
    on:focus={() => (showAutocomplete = true)}
    class="bg-transparent border-b border-b-white p-1 text-xl focus:outline-none focus:border-b-yellow-400 transition-colors"
    {placeholder}
  />

  {#if showAutocomplete && input.trim() !== ''}
    <div
      class="absolute bg-neutral-800 w-full text-lg font-medium max-h-56 overflow-scroll"
    >
      {#each autocompletions as autocompletion}
        <button
          on:click={() => dispatch('autocomplete-click', autocompletion.id)}
          class="w-full p-3 hover:bg-neutral-700 text-left"
        >
          {autocompletion.label}
          {#if autocompletion.secondaryLabel}
            <span class="text-neutral-400"
              >&bull; {autocompletion.secondaryLabel}</span
            >
          {/if}
        </button>
      {/each}

      {#if autocompletions.length === 0 && input.trim() !== ''}
        <p class="text-neutral-500 p-3">No results found.</p>
      {/if}
    </div>
  {/if}
</div>
