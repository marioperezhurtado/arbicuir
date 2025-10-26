<script lang="ts">
  const MIN_SCALE = 1;
  const MAX_SCALE = 1.8;
  const SCALE_FACTOR = 1.4;

  export let scale: number;

  function zoomIn() {
    if (scale >= MAX_SCALE) return;
    (scale = scale * SCALE_FACTOR), MAX_SCALE;
  }

  function zoomOut() {
    if (scale <= MIN_SCALE) return;
    scale = scale / SCALE_FACTOR;
  }
</script>

<div class="absolute flex-col hidden bottom-4 right-4 lg:flex">
  <button
    on:click={zoomIn}
    disabled={scale >= MAX_SCALE}
    class="p-2 transition rounded-t-md bg-ac-dark-2/60
            {scale >= MAX_SCALE
      ? 'brightness-75 hover:brightness-75 cursor-default'
      : 'hover:brightness-125 cursor-pointer'}
        "
  >
    <img src="/icons/plus.svg" alt="Ampliar" class="w-5 h-5" />
  </button>

  <button
    on:click={zoomOut}
    class="p-2 transition rounded-b-md bg-ac-dark-2/60
            {scale <= MIN_SCALE
      ? 'brightness-75 hover:brightness-75 cursor-default'
      : 'hover:brightness-125 cursor-pointer'}
        "
  >
    <img src="/icons/minus.svg" alt="Reducir" class="w-5 h-5" />
  </button>
</div>
