<script lang="ts">
  let show = false;

  function handleScrollTop() {
    document.body.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<svelte:body on:scroll={() => (show = document.body.scrollTop > 200)} />

<button
  on:click={handleScrollTop}
  class="flex fixed right-10 bottom-10 z-20 justify-center items-center p-2.5 rounded-md shadow-md transition-all lg:right-14 lg:bottom-14 bg-ac-darkblue hover:brightness-125"
  class:opacity-0={!show}
>
  <span class="rotate-180">
    <img
      src="/icons/angle.svg"
      alt="Volver arriba"
      width="20"
      height="20"
      class="rotate-180"
    />
  </span>
</button>
