<script lang="ts">
  import Dropdown from "../../../components/Dropdown.svelte";
  
  export let collections: { href: string, title: string }[] = []

  let isOpen = false
</script>

<Dropdown bind:isOpen={isOpen} title="Mostrar todas las colecciones">
  <span
    slot="trigger"
    class="flex gap-0.5 items-center px-2.5 pt-2 pb-1 rounded-md transition hover:shadow-md min-w-fit hover:bg-ac-darkblue"
    class:bg-ac-darkblue={isOpen}
    class:shadow-md={isOpen}
  >
    Colecciones
    <img
      src="/icons/angle.svg"
      alt="Mostrar todas las colecciones"
      width="20"
      height="20"
      class="-mr-1 transition duration-300"
      class:rotate-180={!isOpen}
    />
  </span>
  <ul 
    slot="content"
    class="overflow-hidden absolute left-0 top-10 text-sm rounded-md shadow-md bg-ac-darkblue min-w-fit"
  >
    {#each collections as { href, title }}
      <li>
        <a
          class="block px-2.5 pt-2.5 pb-1.5 transition bg-ac-darkblue hover:brightness-125"
          {href}
        >
          {title}
      </a>
    </li>
    {/each}
  </ul>
</Dropdown>
