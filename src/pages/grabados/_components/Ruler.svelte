<script lang="ts">
  const RULER_HEIGHT = 40;
</script>

<div
  class="flex absolute bottom-0 flex-col-reverse justify-evenly pr-1 pl-5 h-full bg-ac-dark-2/60"
>
  {#each { length: RULER_HEIGHT } as _, i}
    <div class="flex relative gap-1.5 justify-end items-center">
      {#if (i + 1) % 2 === 0}
        <span class="absolute right-9 text-xs">{(i + 1) / 2}</span>
      {/if}
      <div
        class="mb-0.5 rounded-md h-[3px] bg-ac-light/60"
        class:w-4={i % 2 === 0}
        class:w-8={i % 2 !== 0}
      />
    </div>
  {/each}
</div>
