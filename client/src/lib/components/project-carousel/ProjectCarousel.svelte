<script lang="ts">
  let showModal = $state(false);
  import projects from './config';
  let current: number = Math.floor(projects.length / 2);
  const max: number = projects.length - 1;

  function next() {
    current = current === max ? 0 : current + 1;
  }

  function prev() {
    current = current === 0 ? max : current - 1;
  }
</script>

<div class="carousel-container">
  {#each projects as project}
    <div class="carousel-item">
      <button
        aria-label="button"
        type="button"
        class="block cursor-pointer border-none bg-none p-0"
        onclick={() => (showModal = true)}
      >
        <enhanceda:img class="block h-auto w-full" src={project[1]} alt={project[0] as string} />
      </button>
    </div>
  {/each}
</div>

<style>
  .carousel-container {
    height: 600px;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .carousel-item {
    scroll-snap-align: start;
    height: 200px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-item img {
    max-height: 180px;
    max-width: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
</style>
