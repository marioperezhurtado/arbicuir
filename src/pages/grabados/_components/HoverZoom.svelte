<script lang="ts">
  import { onMount } from "svelte";

  export let imgElement: HTMLImageElement;
  export let engraving: Engraving;

  const ZOOM_SCALE = 1.5;
  const ZOOM_SIZE = 90;

  let active = false;
  let mouseX = 0;
  let mouseY = 0;

  function handleMouseMove(event: MouseEvent) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    console.log(mouseX, mouseY);
  }

  onMount(() => {
    imgElement.addEventListener("mousemove", handleMouseMove);
    imgElement.addEventListener("mouseenter", () => active = true);
    imgElement.addEventListener("mouseleave", () => active = false);
  });
</script>

{#if active && mouseX && mouseY}
  <div 
    class="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none border-[3px] border-ac-light/60"
    style="
      width: {ZOOM_SIZE}px;
      height: {ZOOM_SIZE}px;
      left: {mouseX}px; 
      top: {mouseY}px;
      background: url({engraving.url}) no-repeat;
      background-size: {imgElement.width * ZOOM_SCALE}px {imgElement.height * ZOOM_SCALE}px;
      background-position: {-(mouseX * ZOOM_SCALE - ZOOM_SIZE / 2)}px {-(mouseY * ZOOM_SCALE - ZOOM_SIZE / 2)}px;
    "
  />
{/if}