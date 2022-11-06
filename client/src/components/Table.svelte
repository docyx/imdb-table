<script lang="ts">
import type { Ratings } from '../types'
import { colors } from '../stores'

export let ratings: Ratings

let activeSeason: number | null = null
let activeEpisode: number | null = null

let maxEpisodeCount = ratings.reduce(
  (max, currentSeason) =>
    currentSeason.length > max ? currentSeason.length : max,
  0
)

const getBackgroundForRating = (rating: number) => {
  if (rating >= 8.5) return $colors[0]
  else if (rating >= 7.6) return $colors[1]
  else if (rating >= 6.5) return $colors[2]
  else return $colors[3]
}
</script>

<div class="mb-3 flex items-center justify-center">
  <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-6">
    <div class="flex items-center">
      <div class={`w-5 h-5 mr-2 ${$colors[0]}`} />
      <p>8.5&ndash;10.0</p>
    </div>
    <div class="flex items-center">
      <div class={`w-5 h-5 mr-2 ${$colors[1]}`} />
      <p>7.6&ndash;8.4</p>
    </div>
    <div class="flex items-center">
      <div class={`w-5 h-5 mr-2 ${$colors[2]}`} />
      <p>6.5&ndash;7.5</p>
    </div>
    <div class="flex items-center">
      <div class={`w-5 h-5 mr-2 ${$colors[3]}`} />
      <p>0.0&ndash;6.4</p>
    </div>
  </div>
</div>

<div class="max-w-[100vw] overflow-x-auto">
  <div class="relative p-8">
    <table class="table-auto m-auto">
      <tr class="sticky top-0 bg-neutral-900">
        <th />
        {#each Array(maxEpisodeCount) as _, i}
          <th
            scope="col"
            class={`${
              activeEpisode === i
                ? 'text-white font-bold'
                : 'text-neutral-400 font-light'
            } py-2`}>{i + 1}</th
          >
        {/each}
      </tr>

      {#each ratings as season, seasonIndex}
        <tr class="p-2">
          <th
            scope="row"
            class={`${
              activeSeason === seasonIndex
                ? 'text-white font-bold'
                : 'text-neutral-400 font-light'
            } w-10 pr-2 sticky left-0 p-1 bg-neutral-900`}>{seasonIndex + 1}</th
          >
          {#each season as episode, episodeIndex}
            {#if episode}
              <td
                on:mouseenter={() => {
                  activeSeason = seasonIndex
                  activeEpisode = episodeIndex
                }}
                on:mouseleave={() => {
                  activeSeason = null
                  activeEpisode = null
                }}
                class={`${getBackgroundForRating(episode[0])}`}
              >
                <a
                  class="block p-1"
                  href={`https://www.imdb.com/title/${episode[1]}/`}
                  >{episode[0].toFixed(1)}</a
                >
              </td>
            {:else}
              <td
                class="bg-neutral-700"
                title="This episode is not rated on IMDb."
              />
            {/if}
          {/each}
        </tr>
      {/each}
    </table>

    <p class="absolute text-xl top-0 left-0 right-0 mx-auto">Episode</p>
    <p class="absolute text-xl -left-9 top-1/2 bottom-1/2 transform -rotate-90">
      Season
    </p>
  </div>
</div>
