<script lang="ts">
  import { scale } from "svelte/transition";
  import Ruler from "./Ruler.svelte";
  import type { Engraving } from "./types.ts";

  export let engraving: Engraving;
  export let expanded: boolean;
</script>

<div
  class="flex fixed top-0 left-0 z-30 justify-center items-center w-screen h-screen"
>
  <button
    on:click={() => (expanded = false)}
    class="fixed top-0 left-0 z-30 w-screen h-screen bg-black bg-opacity-50"
  />
  <div
    in:scale={{ start: 0.8, duration: 300 }}
    class="overflow-hidden relative z-30 mx-auto rounded-md shadow-md w-fit"
  >
    <img
      src={engraving.url}
      alt={engraving.title}
      class="object-cover h-[70vh] max-h-[704px] bg-ac-dark-2"
    />
    <p
      class="absolute bottom-10 left-1/2 px-3 pt-2.5 pb-1.5 text-xl rounded-md -translate-x-1/2 font-display bg-ac-dark-2/60 text-ac-light w-fit"
    >
      {engraving.title}
    </p>
    <button
      on:click={() => (expanded = false)}
      class="absolute top-2 right-2 transition hover:brightness-125"
    >
      <img src="/icons/close.svg" alt="Close" class="w-9 h-9" />
    </button>
    <Ruler />
  </div>
</div>
