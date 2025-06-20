<script lang="ts">
  import Icon from '@iconify/svelte';
  export let link;
</script>

<a target="_blank" rel="noopener noreferrer" href={link}>
  <div
    class="card border-secondary bg-secondary hover:drop-shadow-secondary m-0.5
      inline-flex items-center gap-2 rounded-lg border-2 p-1 drop-shadow-sm"
  >
    <Icon icon="line-md:github" class="text-primary" />
    <p class="text-primary text-sm leading-none">Github</p>
  </div>
</a>

<style>
</style>
