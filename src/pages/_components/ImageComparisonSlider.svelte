<script lang="ts">
  let position = 50;

  export let beforeImage: string;
  export let afterImage: string;
</script>

<div
  class="hidden overflow-hidden relative rounded-md md:block w-[400px] h-fit"
>
  <div class="absolute top-1/2 z-10 w-full bg-transparent -translate-y-1/2">
    <input
      type="range"
      min="0"
      max="100"
      bind:value={position}
      class="absolute top-1/2 z-10 opacity-0 -translate-y-1/2 appearance-none"
    />
    <span
      class="flex absolute top-1/2 z-0 justify-center items-center w-6 h-6 rounded-full transition -translate-x-1/2 -translate-y-1/2 bg-zinc-500 text-ac-lightblue hover:brightness-110"
      style="left: {position}%;"
    >
      <img
        src="/icons/slide.svg"
        alt="Desliza para ver el antes y después"
        height={24}
        width={24}
      />
    </span>
  </div>
  <img
    src={afterImage}
    alt="Después"
    width={400}
    height={300}
    class="pointer-events-none"
    style="clip-path: polygon({position}% 0, 100% 0, 100% 100%, {position}% 100%);"
  />
  <img
    src={beforeImage}
    alt="Antes"
    width={400}
    height={300}
    class="absolute top-0 left-0 pointer-events-none"
    style="clip-path: polygon(0 0, {position}% 0, {position}% 100%, 0 100%)"
  />
  <div
    class="absolute w-[3px] bg-zinc-500"
    style="height: 300px; left: {position}%; top: 0; transform: translateX(-50%);"
  />
</div>

<style>
  input[type="range"] {
    width: calc(100% + 24px);
    margin-left: -12px;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
  }
  input[type="range"]::-moz-range-thumb {
    height: 24px;
    width: 24px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
  }
</style>
