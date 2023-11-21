<script lang="ts">
  import ExpandedEngraving from "./ExpandedEngraving.svelte";
  import type { Engraving } from "./types";

  export let engraving: Engraving;

  let expanded = false;
</script>

<div class="h-fit">
  <button
    on:click={() => (expanded = !expanded)}
    class="overflow-hidden rounded-md shadow-md block"
  >
    <img
      src={engraving.preview}
      alt={engraving.title}
      class="object-cover w-full rounded-md duration-500 hover:scale-110 aspect-video"
    />
  </button>
  <h2 class="mt-2">{engraving.title}</h2>
</div>

{#if expanded}
  <ExpandedEngraving bind:expanded {engraving} />
{/if}
