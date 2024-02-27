<script lang="ts">
  import PageTransition from "$lib/transition.svelte";
  import type { LayoutServerData } from "./$types";

  export let data: LayoutServerData;
</script>

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
