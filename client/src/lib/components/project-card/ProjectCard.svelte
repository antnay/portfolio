<script lang="ts">
  const images = import.meta.glob('$lib/assets/*.png', { eager: true, import: 'default' });
  import GetSticker from '$lib/components/stickers/GetSticker.svelte';
  import GithubSticker from '$lib/components/stickers/GithubSticker.svelte';
  import StackSticker from '$lib/components/stickers/StackSticker.svelte';
  import DynamicImage from '$lib/components/dynamic-image/DynamicImage.svelte';
  export let project: string;
  export let description: string = 'description';
  export let github: string;
  export let link: string;
  export let stack: string[];
  stack.sort();

  let lowerCase = project.toLowerCase();
</script>

<div
  class="{lowerCase} border-secondary ease-fluid hover:shadow-secondary border-1 font-nav
  max-h-600px h-fit w-85 relative flex flex-col rounded-xl p-3 shadow-sm transition-shadow hover:shadow-sm"
>
  <div class="h-fit">
    <h1 class="text-secondary font-bold">{project}</h1>
    <p class="text-text overflow-ellipsis">{description}</p>
  </div>
  <DynamicImage name={lowerCase} />
  <div class="my-1.5">
    {#if github}
      <GithubSticker link={github} />
    {/if}
    {#if link}
      <GetSticker link="" />
    {/if}
  </div>
  <div class="flex flex-wrap gap-1 overflow-hidden">
    {#each stack as element, _ (element)}
      <StackSticker name={element} />
    {/each}
  </div>
</div>
