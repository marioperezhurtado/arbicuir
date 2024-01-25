<script lang="ts">
  import Engraving from "./Engraving.svelte";
  import SearchBar from "./SearchBar.svelte";
  import Category from "./Category.svelte";
  import type { Engraving as EngravingItem } from "./types";

  export let engravings: EngravingItem[];
  export let categories: string[];
  export let selectedCategory: string;

  let filteredEngravings = engravings;
</script>

<div class="flex flex-wrap justify-between gap-x-10 gap-y-6 items-center pt-10">
  <ul class="flex gap-2 text-sm sm:gap-4 text-ac-light flex-wrap">
    {#each categories as c}
      <Category
        title={c.slice(0, 1).toUpperCase() + c.slice(1)}
        href={c === "todos" ? "/grabados" : `/grabados/${c}`}
        selected={selectedCategory === c}
      />
    {/each}
  </ul>
  <SearchBar initialEngravings={engravings} bind:filteredEngravings />
</div>

{#if filteredEngravings.length === 0}
  <p class="mt-14">No hay grabados que coincidan con tu búsqueda.</p>
{:else}
  <section
    class="grid grid-cols-2 gap-3 mt-14 w-full text-center sm:grid-cols-3 sm:gap-4 md:grid-cols-4"
  >
    {#each filteredEngravings as engraving (engraving.title)}
      <Engraving {engraving} />
    {/each}
  </section>
{/if}
