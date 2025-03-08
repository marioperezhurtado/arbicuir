<script lang="ts">
  const RULER_HEIGHT = 40;
</script>

<div
  class="absolute bottom-0 flex flex-col-reverse h-full pl-5 pr-1 justify-evenly bg-ac-dark-2/60"
>
  {#each { length: RULER_HEIGHT } as _, i}
    <div class="flex relative gap-1.5 justify-end items-center">
      {#if (i + 1) % 2 === 0}
        <span class="absolute text-xs right-9">{(i + 1) / 2}</span>
      {/if}
      <div
        class="mb-0.5 rounded-md h-[3px] bg-ac-light/60"
        class:w-4={i % 2 === 0}
        class:w-8={i % 2 !== 0}
      />
    </div>
  {/each}
</div>
