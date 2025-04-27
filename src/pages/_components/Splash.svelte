<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';

    let show = false;

    onMount(() => {
        if (sessionStorage.getItem('visited')) {
            show = false;
        } else {
            show = true;

            setTimeout(() => {
                show = false;
                sessionStorage.setItem('visited', 'true');
            }, 4000);
        }
    });
</script>

{#if show}
    <div out:fade class="fixed top-0 left-0 z-30 flex flex-col items-center justify-center w-screen h-screen p-5 bg-ac-dark/90 backdrop-blur-sm">
        <img
          src="https://res.cloudinary.com/marioperezhurtado/image/upload/v1700738060/arbicuir/isologo.webp"
          alt="Arbicuir logo"
          class="w-40"
        />

        <h1 class="mt-16 mb-5 text-3xl text-center text-ac-light font-display">
            Más de <u class="underline-offset-4">30</u> años dedicados a la moda.
        </h1>

        <p class="max-w-2xl mb-32 text-lg text-center">
            Este año celebramos tres décadas de experiencia en el sector y seguimos trabajando con la misma pasión y dedicación del primer día.
        </p>
    </div>
{/if}