<script lang="ts">
  const gap = 32;

  let isOnLeft = true;
  let isOnRight = false;
  let slider: HTMLUListElement;

  const handleSlide = (direction: "next" | "prev") => {
    isOnLeft = false;
    isOnRight = false;
    if (!slider) return;

    const slideWidth = slider.firstElementChild?.clientWidth;
    if (!slideWidth) return;

    const newScroll =
      slider.scrollLeft +
      (direction === "next" ? slideWidth + gap : -slideWidth - gap);

    isOnLeft = newScroll <= 0;
    isOnRight = newScroll >= slider.scrollWidth - slider.clientWidth;

    slider.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  export let products: { title: string; url: string }[];
</script>

<div class="overflow-x-auto relative">
  <ul
    bind:this={slider}
    id="product-list"
    class="flex overflow-x-auto gap-4 h-28 sm:gap-8"
  >
    {#each products as { title, url }}
      <li class="overflow-hidden h-28 rounded-md shadow-sm min-w-[10rem]">
        <img
          src={url}
          alt={title}
          class="object-cover w-full h-full transition duration-500 hover:scale-110"
        />
      </li>
    {/each}
  </ul>
  {#if !isOnLeft}
    <button
      on:click={() => handleSlide("prev")}
      aria-label="Anterior"
      class="hidden absolute left-1 top-1/2 p-1.5 pl-1 rounded-md transition -translate-y-1/2 md:block bg-ac-darkblue text-ac-light hover:brightness-110"
    >
      <img
        src="/icons/angle.svg"
        alt="Anterior"
        width={22}
        height={22}
        class="-rotate-90"
      />
    </button>
  {/if}
  {#if !isOnRight}
    <button
      on:click={() => handleSlide("next")}
      aria-label="Siguiente"
      class="hidden absolute right-1 top-1/2 p-1.5 pr-1 rounded-md transition -translate-y-1/2 sm:block bg-ac-darkblue text-ac-light hover:brightness-110"
    >
      <img
        src="/icons/angle.svg"
        alt="Siguiente"
        width={22}
        height={22}
        class="rotate-90"
      />
    </button>
  {/if}
</div>

<style>
  #product-list {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  #product-list::-webkit-scrollbar {
    display: none;
  }
</style>
