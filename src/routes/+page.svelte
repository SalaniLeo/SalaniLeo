<script lang="ts">
  import Experience from "./../lib/HomeElements/experience.svelte";
  import Projects from "$lib/HomeElements/projects.svelte";
  import Navbar from "$lib/svelteComponents/navbar.svelte";
  import Home from "$lib/HomeElements/home.svelte";

  import { enableScroll } from "$lib";
  import School from "$lib/HomeElements/school.svelte";
	import Footer from "$lib/svelteComponents/footer.svelte";
	import ThemeChanger from "$lib/svelteComponents/themeChanger.svelte";

  let tmpY: number;
  let pageY: number;
  let hideThemeChanger = false;
  let scale:number;

  $: outerWidth = 0;
  $: innerWidth = 0;
  $: outerHeight = 0;
  $: innerHeight = 0;

  function handleScroll() {
    tmpY = pageY;
    scale = (innerHeight / (pageY + innerHeight)) * 100;
    if (scale < 95) {
      hideThemeChanger = true
    } else {
      hideThemeChanger = false
    }
  }
</script>

<svelte:window
  on:scroll={handleScroll}
  bind:scrollY={pageY}
  bind:innerWidth
  bind:outerWidth
  bind:innerHeight
  bind:outerHeight
/>

<div class="root">
  <div class="full"></div>
  <div id="home" style="scale: {scale}%;2">
    <div id="themeChanger-wrapper" class:hide={hideThemeChanger}>
      <ThemeChanger></ThemeChanger>
    </div>
    <Home></Home>
  </div>
  <Navbar></Navbar>
  <div class="wrapper-backdrop">
    <div class="tleft wrapper" id="work">

      <Experience></Experience>

      <School></School>
  
      <Projects></Projects>

      <!-- <Passions></Passions> -->
    </div>
  </div>

  <Footer></Footer>
</div>

{#if !$enableScroll}
  <style>
    body {
      overflow-y: hidden;
    }
  </style>
{/if}

<style>
   #themeChanger-wrapper {
    position: fixed;
    color: var(--text-primary-color) !important;
    top: 1rem;
    right: 1rem;
    z-index: 2;
    animation: 4s rotate infinite;
   }
  .hide {
    opacity: 0;
  }
  .wrapper-backdrop {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.12);
    display: flex;
    top: 0;
  }
  @keyframes rotate {
    0% {
      rotate: 45deg
    }
    50% {
      rotate: 0deg;
    }
    100% {
      rotate: 45deg
    }
  }
</style>