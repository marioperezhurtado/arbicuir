<script lang="ts">
  import { onMount } from "svelte";
  import ExpandedEngraving from "./ExpandedEngraving.svelte";
  import type { Engraving } from "./types";

  export let engraving: Engraving;

  let expanded = false;

  function handleClose() {
    history.pushState({}, "", window.location.pathname);
    expanded = false;
  }

  function handleOpen() {
    history.pushState({}, "", `?grabado=${engraving.title}`);
    expanded = true;
  }

  onMount(() => {
    expanded = window.location.search.includes(engraving.title);
  });
</script>

<div class="h-fit">
  <button
    on:click={handleOpen}
    class="block overflow-hidden w-full rounded-md shadow-md aspect-video"
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
  <ExpandedEngraving {engraving} onClose={handleClose} />
{/if}
