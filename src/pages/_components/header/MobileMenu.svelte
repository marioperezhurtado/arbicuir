<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import Dropdown from "../../../components/Dropdown.svelte";

  let isOpen = false;
  let collectionsOpen = false;

  const collections = [
    {
      title: "Primavera/Verano",
      url: "/colecciones/primavera-verano",
    },
    {
      title: "Otoño/Invierno",
      url: "/colecciones/otono-invierno",
    },
    {
      title: "Laminados",
      url: "/colecciones/laminados",
    },
  ];
</script>

<Dropdown bind:isOpen title="Open menu">
  <div slot="trigger" class="w-8 md:hidden">
    <img src="/icons/menu.svg" alt="Abrir menú" width="32" height="32" />
    {#if isOpen}
      <div
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 100 }}
        class="fixed left-0 top-16 w-screen h-screen bg-black bg-opacity-50"
      />
    {/if}
  </div>

  <ul
    slot="content"
    class="fixed right-0 top-16 w-screen shadow-md md:hidden bg-neutral-700"
  >
    <li>
      <Dropdown bind:isOpen={collectionsOpen} title="Show collections">
        <div
          slot="trigger"
          class="flex gap-1 px-5 pt-5 pb-3.5 w-screen text-left"
        >
          Colecciones
          <img
            src="/icons/angle.svg"
            alt="Desplegar colecciones"
            width="20"
            height="20"
            class:rotate-180={!collectionsOpen}
            class="transition duration-300"
          />
        </div>
        <ul
          in:slide={{ duration: 200 }}
          slot="content"
          class="w-screen text-sm bg-neutral-600"
        >
          {#each collections as item}
            <li>
              <a href={item.url} class="block px-4 pt-4 pb-2.5 pl-8">
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </Dropdown>
    </li>
    <li>
      <a href="/grabados" class="block px-5 pt-5 pb-3.5"> Grabados </a>
    </li>
    <li>
      <a href="/sobre-nosotros" class="block px-5 pt-5 pb-3.5">
        Sobre Nosotros
      </a>
    </li>
    <li>
      <a href="/contacto" class="block px-5 pt-5 pb-3.5"> Contacto </a>
    </li>
  </ul>
</Dropdown>
