<script lang="ts">
  const RULER_HEIGHT = 40;
</script>

<div
  class="h-full bg-ac-dark-2/60 absolute bottom-0 flex flex-col-reverse
      justify-evenly pl-5 pr-1"
>
  {#each { length: RULER_HEIGHT } as _, i}
    <div class="flex relative gap-1.5 items-center justify-end">
      {#if (i + 1) % 2 === 0}
        <span class="absolute right-9 text-xs">{(i + 1) / 2}</span>
      {/if}
      <div
        class="h-[3px] mb-0.5 bg-ac-light/60 rounded-md"
        class:w-4={i % 2 === 0}
        class:w-8={i % 2 !== 0}
      />
    </div>
  {/each}
</div>
