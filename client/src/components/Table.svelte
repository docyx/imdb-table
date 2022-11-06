<script lang="ts">
import type { Ratings } from '../types'

export let ratings: Ratings

let activeSeason: number | null = null
let activeEpisode: number | null = null

let maxEpisodeCount = ratings.reduce(
  (max, currentSeason) =>
    currentSeason.length > max ? currentSeason.length : max,
  0
)

const getBackgroundForRating = (rating: number) => {
  if (rating >= 8.5) return 'bg-green-500'
  else if (rating >= 7.6) return 'bg-yellow-500'
  else if (rating >= 6.5) return 'bg-orange-500'
  else return 'bg-red-500'
}
</script>

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
