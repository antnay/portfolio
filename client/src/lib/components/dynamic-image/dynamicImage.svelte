<script>
  import { onMount } from 'svelte';

  // export let src;
  export let name;
  let imageSrc = null;

  async function loadImage(name) {
    try {
      const module = await import(`$lib/assets/images/${name}.png`);
      return module.default;
    } catch (error) {
      console.warn(`Image not found: ${name}`);
      return null;
    }
  }

  $: if (name) {
    loadImage(name).then((src) => {
      imageSrc = src;
    });
  }
</script>

{#if name}
  <!-- svelte-ignore a11y_missing_attribute -->
  <img src={imageSrc} class="rounded-xl max-w-full place-content-center object-fit" />
{:else}
  <div>Loading...</div>
{/if}
