<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import Ruler from "./Ruler.svelte";
  import HoverZoom from "./HoverZoom.svelte";
  import type { Engraving } from "./types.ts";

  export let engraving: Engraving;
  export let onClose: () => void;

  let imgElement: HTMLImageElement;
</script>

<div class="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen">
  <button
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 100 }}
    on:click={onClose}
    class="fixed top-0 left-0 z-30 w-screen h-screen bg-black bg-opacity-50"
  />
  <div
    in:scale={{ start: 0.8, duration: 300 }}
    class="relative z-30 mx-auto overflow-hidden rounded-md shadow-md w-fit"
  >
    <img
      bind:this={imgElement}
      src={engraving.url}
      alt={`Grabado ${engraving.title} de Arbicuir, S.L.`}
      class="object-cover h-[70vh] md:h-[80vh] bg-ac-dark-2 cursor-none"
    />
    <p
      class="absolute bottom-10 left-1/2 px-3 pt-2.5 pb-1.5 text-xl rounded-md -translate-x-1/2 font-display bg-ac-dark-2/60 text-ac-light w-fit"
    >
      {engraving.title}
    </p>
    <button
      on:click={onClose}
      class="absolute transition top-2 right-2 hover:brightness-125"
    >
      <img src="/icons/close.svg" alt="Close" class="w-9 h-9" />
    </button>

    <Ruler />
    <HoverZoom {imgElement} {engraving} />
  </div>
</div>
