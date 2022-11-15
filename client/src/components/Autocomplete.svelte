<script lang="ts">
import { debounce } from 'lodash-es'
import { createEventDispatcher } from 'svelte'
import type { AutocompleteItem } from '../types'

export let placeholder: string | null = null
export let inputEl: HTMLInputElement | null = null
export let getAutocompletions: (query: string) => Promise<AutocompleteItem[]>

const dispatch = createEventDispatcher()

let input = ''
let autocompletionsContainer: HTMLDivElement | null = null
let cursorIndex: number | null = null
let autocompletions: AutocompleteItem[] = []
let showAutocomplete = false

const onKeyDown = ({ key }: KeyboardEvent) => {
  if (key === 'Escape') {
    inputEl?.blur()
    return
  }

  if (cursorIndex != null) {
    if (key === 'Enter')
      dispatch('autocomplete-click', autocompletions[cursorIndex].id)
  }
  if (key === 'ArrowUp' || key === 'ArrowDown') {
    if (cursorIndex == null) {
      cursorIndex = 0
      return
    }

    const getActiveNode = () =>
      cursorIndex == null
        ? undefined
        : (autocompletionsContainer?.childNodes[cursorIndex] as
            | HTMLButtonElement
            | undefined)

    if (key === 'ArrowUp') {
      if (cursorIndex === 0) cursorIndex = null
      else {
        cursorIndex -= 1

        getActiveNode()?.scrollIntoView({ block: 'center' })
      }
    } else if (key === 'ArrowDown') {
      if (cursorIndex === autocompletions.length - 1) {
        cursorIndex = 0
        getActiveNode()?.scrollIntoView()
      } else {
        cursorIndex += 1

        getActiveNode()?.scrollIntoView({ block: 'center' })
      }
    }
  }
}

const onKeyDownDebounced = debounce(() => {
  if (input === '') {
    autocompletions = []
    return
  }

  getAutocompletions(input).then(
    (completions) => (autocompletions = completions)
  )
}, 300)
</script>

<div class="relative" id="container">
  <input
    type="text"
    aria-haspopup="true"
    aria-controls="menu"
    bind:this={inputEl}
    bind:value={input}
    on:keydown={onKeyDown}
    on:keydown={onKeyDownDebounced}
    on:focus={() => (showAutocomplete = true)}
    on:blur={() => (showAutocomplete = false)}
    class="bg-transparent border-b border-b-white p-1 text-xl focus:outline-none focus:border-b-yellow-400 transition-colors"
    {placeholder}
  />

  {#if showAutocomplete && input.trim() !== ''}
    <div
      id="menu"
      role="menu"
      aria-activedescendant={cursorIndex != null
        ? autocompletions[cursorIndex].id
        : null}
      class="absolute bg-neutral-800 w-full text-lg font-medium max-h-56 overflow-scroll"
      bind:this={autocompletionsContainer}
    >
      {#each autocompletions as autocompletion, i}
        <button
          on:click={() => dispatch('autocomplete-click', autocompletion.id)}
          on:mouseenter={() => (cursorIndex = i)}
          on:mouseleave={() => (cursorIndex = null)}
          id={autocompletion.id}
          role="menuitem"
          class={`w-full p-3 hover:bg-neutral-700 text-left${
            i === cursorIndex ? ' bg-neutral-700' : ''
          }`}
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
