<script lang="ts">
  import { onMount } from 'svelte';
  export let name;
  let imageSrc: any = null;

  async function loadImage(name: string) {
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

{#if imageSrc}
  <!-- svelte-ignore a11y_missing_attribute -->
  <div class="my-1.5 flex items-center">
    <img src={imageSrc} class="object-fit h-40 w-auto items-center rounded-xl" />
  </div>
{/if}
