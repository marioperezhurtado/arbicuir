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
    const urlParams = new URLSearchParams(window.location.search);
    const engravingParam = urlParams.get("grabado") || "";

    expanded = decodeURIComponent(engravingParam) === engraving.title;
  });
</script>

<div class="relative h-fit">
  {#if engraving.new}
    <span
      class="absolute top-2 right-2 z-10 px-2 pt-1 text-xs font-bold tracking-wide text-white uppercase bg-red-500 rounded-full"
    >
      Novedad
    </span>
  {/if}

  <button
    on:click={handleOpen}
    class="block overflow-hidden w-full rounded-md shadow-md aspect-video"
  >
    <img
      src={engraving.preview}
      alt={`Vista previa grabado ${engraving.title} de Arbicuir, S.L.`}
      class="object-cover w-full rounded-md duration-500 hover:scale-110 aspect-video"
    />
  </button>
  <h2 class="mt-2">{engraving.title}</h2>
</div>

{#if expanded}
  <ExpandedEngraving {engraving} onClose={handleClose} />
{/if}
