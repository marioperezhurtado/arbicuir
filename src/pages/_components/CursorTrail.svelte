<script lang="ts">
  let trailer: HTMLDivElement

  const handleCursorMove = (e: MouseEvent) => {
    if (!trailer) return
    trailer.classList.remove('hidden')

    const x = e.clientX - trailer.offsetWidth / 2
    const y = e.clientY - trailer.offsetHeight / 2

    const keyframes = {
      transform: `translate(${x}px, ${y}px)`
    }

    trailer.animate(keyframes, {
      duration: 250,
      fill: 'forwards'
    })
  }

  export let text: string
</script>

<svelte:document on:mousemove={handleCursorMove} />

<div
  bind:this={trailer}
  class="hidden absolute top-0 left-0 z-30 rounded-full pointer-events-none w-[80px] h-[80px]"
>
  <p class="absolute text-sm text-ac-light w-[80px] h-[80px]" id="trailer">
    {#each text.split('') as char, i}
      <span style="transform: rotate({i * 12.5}deg);">{char}</span>
    {/each}
  </p>
</div>

<style>
  span {
    position: absolute;
    left: 50%;
    transform-origin: 0 40px;
    font-family: 'Courier New', Courier, monospace;
  }
  #trailer {
    animation: spin 8s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translate(0, 0);
    }
  }
</style>
