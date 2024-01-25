<script lang="ts">
  import type { Engraving } from "./types";

  export let initialEngravings: Engraving[];
  export let filteredEngravings: Engraving[];

  let search = "";

  $: {
    if (search === "") {
      filteredEngravings = initialEngravings;
    } else {
      filteredEngravings = initialEngravings.filter((engraving) =>
        engraving.title.toLowerCase().startsWith(search.toLowerCase())
      );
    }
  }
</script>

<div class="relative w-full xs:max-w-xs">
  <input
    bind:value={search}
    type="text"
    placeholder="Buscar por nombre"
    class="pt-2.5 pb-1.5 pl-3 pr-9 rounded-md shadow-md text-sm bg-ac-dark-2 w-full placeholder-ac-light-2 focus:outline-none focus:ring-2 focus:ring-ac-lightblue"
  />
  <img
    src="/icons/search.svg"
    alt="Search icon"
    class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
  />
</div>
