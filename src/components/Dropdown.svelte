<script lang="ts">
  import { fade } from 'svelte/transition'

  export let isOpen: boolean
  export let title: string

  function clickOutside(
    node: HTMLElement,
    callback: (evt: MouseEvent) => void
  ) {
    const handleClick = (evt: MouseEvent) => {
      if (!node.contains(evt.target as Node)) {
        callback(evt)
      }
    }

    document.addEventListener('click', handleClick)

    return {
      destroy() {
        document.removeEventListener('click', handleClick)
      }
    }
  }
</script>

<div
  use:clickOutside={() => (isOpen = false)}
  class="flex relative flex-col items-center group"
>
  <button on:click={() => (isOpen = !isOpen)} aria-label={title}>
    <slot name="trigger" />
  </button>

  {#if isOpen}
    <div in:fade={{ delay: 0, duration: 150 }}>
      <slot name="content" />
    </div>
  {/if}
</div>
