<script lang="ts">
  import PageTransition from "$lib/transition.svelte";
  import type { LayoutServerData } from "./$types";
  import favicon from "$lib/favicon.png";
  import { onMount } from "svelte";
  import { getCookie, setCookie, setTheme } from "$lib";
  let currentTheme = "light";
  import Menu from "$lib/components/Menu.svelte";

  onMount(() => {
    if (getCookie("theme") != null) {
      currentTheme = getCookie("theme");
      document.documentElement.dataset.theme == currentTheme;
      setTheme(currentTheme, false);
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
