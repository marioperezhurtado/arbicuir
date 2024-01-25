<script lang="ts">
  export let href: string;
  export let title: string;
  export let selected: boolean;
</script>

<li>
  <a
    {href}
    class={`block px-3 pt-2 pb-1 transition rounded-md shadow-md bg-ac-dark-2
    hover:brightness-125 ${selected ? "bg-ac-light-2 text-ac-dark" : ""}`}
  >
    {title}
  </a>
</li>
