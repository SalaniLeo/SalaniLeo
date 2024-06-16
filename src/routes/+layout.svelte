<script lang="ts">
  import PageTransition from "$lib/transition.svelte";
  import type { LayoutServerData } from "./$types";
  import favicon from "$lib/pfp.png";
  import { onMount } from "svelte";
  import { getCookie, setTheme } from "$lib";
  let currentTheme = "light";
  let shadow: HTMLElement;

  onMount(() => {
    if (getCookie("theme") != null) {
      currentTheme = getCookie("theme");
      document.documentElement.dataset.theme = currentTheme;
      setTheme(currentTheme, false);
    } else {
      setTheme(currentTheme, true);
    }
  });

  let m = { x: 0, y: 0 };

  function handleMousemove(event: MouseEvent) {
    return
    m.x = event.clientX;
    m.y = event.clientY;
    console.log(m.x, m.y);
    if (shadow) {
      shadow.style.top = `${m.y}px`;
      shadow.style.left = `${m.x}px`;
    }
  }

  export let data: LayoutServerData;
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={favicon} />
  <title>SalaniLeo</title>
</svelte:head>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="layout" on:mousemove={handleMousemove}>
  <div class="root">
    <PageTransition pathname={data.pathname}>
      <!-- <div class="shadow" bind:this={shadow}></div> -->
      <slot />
    </PageTransition>
  </div>
</div>

<style>
.layout {
  top: 0px;
  height: 100vh;
  position: absolute;
  width: 100vw;
  left: 0px;
}
.root {
  padding-top: 50px;
  max-width: 64rem;
  margin: 1rem auto;
  margin-bottom: 0px !important;
}
@media screen and (max-width: 890px) {
  .root {
    padding-top: 0px;
  }
}
.shadow {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(100, 100, 100, 0.1);
  box-shadow: 0px 0px 50px 10px var(--tertiary-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: -4;
}
</style>
