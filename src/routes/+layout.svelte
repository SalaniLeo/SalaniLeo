<script lang="ts">
  import PageTransition from "$lib/transition.svelte";
  import type { LayoutServerData } from "./$types";
  import favicon from "$lib/pfp.png";
  import { onMount } from "svelte";
  import { getCookie, setTheme } from "$lib";
  let currentTheme = "light";

  onMount(() => {
    if (getCookie("theme") != null) {
      currentTheme = getCookie("theme");
      document.documentElement.dataset.theme == currentTheme;
      setTheme(currentTheme, false);
    } else {
      setTheme(currentTheme, true);
    }
  });

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
