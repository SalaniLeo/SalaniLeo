<script lang="ts">
  import PageTransition from "$lib/transition.svelte";
  import type { LayoutServerData } from "./$types";
  import favicon from "$lib/pfp.png";

  export let data: LayoutServerData;
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={favicon} />
  <title>SalaniLeo</title>
</svelte:head>

<div class="layout">
  <PageTransition pathname={data.pathname}>
    <slot />
  </PageTransition>
</div>

<style>
  .layout {
    max-width: 64rem;
    margin: 1rem auto;
    margin-bottom: 0px !important;
  }
</style>
