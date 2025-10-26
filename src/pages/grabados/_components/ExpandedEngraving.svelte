<script lang="ts">
  import { fade, scale as scaleTransition } from "svelte/transition";
  import Ruler from "./Ruler.svelte";
  import ZoomControls from "./ZoomControls.svelte";
  import type { Engraving } from "./types.ts";

  export let engraving: Engraving;
  export let onClose: () => void;

  let scale = 1;
</script>

<div
  class="fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen"
>
  <button
    type="button"
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 100 }}
    on:click={onClose}
    class="fixed top-0 left-0 z-30 w-screen h-screen bg-black/50"
    aria-label="Cerrar grabado ampliado"
  >
  </button>

  <div
    in:scaleTransition={{ start: 0.8, duration: 300 }}
    class="relative z-30 mx-auto overflow-hidden rounded-md shadow-md w-fit"
  >
    <img
      src={engraving.url}
      alt={`Grabado ${engraving.title} de Arbicuir, S.L.`}
      class="object-cover h-[70vh] md:h-[80vh] bg-ac-dark-2 transition"
      style="transform: scale({scale});"
    />

    <button
      on:click={onClose}
      class="absolute p-2 transition rounded-md top-4 right-4 hover:brightness-125 bg-ac-dark-2/60 cursor-pointer"
    >
      <img src="/icons/plus.svg" alt="Cerrar" class="w-5 h-5 rotate-45" />
    </button>

    {#if scale == 1}
      <Ruler />
    {/if}
    <ZoomControls bind:scale />
  </div>
</div>
