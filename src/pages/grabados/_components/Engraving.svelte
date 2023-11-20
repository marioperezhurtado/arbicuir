<script lang="ts">
  import ExpandedEngraving from "./ExpandedEngraving.svelte";
  import type { Engraving } from "./types";

  export let engraving: Engraving;

  let expanded = false;
</script>

<button 
  on:click={() => expanded = !expanded}
  class="overflow-hidden rounded-md shadow-md h-fit"
>
  <img
    src={engraving.preview}
    alt={engraving.title}
    class="object-cover w-full rounded-md duration-500 hover:scale-110 aspect-video"
  />
</button>

{#if expanded}
  <ExpandedEngraving bind:expanded {engraving} />
{/if}
