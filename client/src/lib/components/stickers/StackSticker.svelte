<script lang="ts">
  import Icon from '@iconify/svelte';
  export let name: string;

  const iconMap = {
    gmail: 'logos:google-gmail',
    flask: 'cib:flask',
    rust: 'cib:rust',
    s3: 'logos:aws-s3',
    github: 'line-md:github-loop',
    'node.js': 'devicon:nodejs'
  };

  let lower = name.toLowerCase();
  let stackIcon: string = iconMap[lower] || `devicon:${lower}`;
</script>

<div
  class="card bg-primary border-secondary m-0.5 inline-flex h-7 items-center gap-2 rounded-lg border-1 p-2"
>
  <Icon icon={stackIcon} class="text-secondary" />
  <p class="text-secondary text-sm leading-none">{name}</p>
</div>

<style>
</style>
