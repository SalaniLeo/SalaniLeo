<script lang="ts">
  import Passions from "./../lib/HomeElements/passions.svelte";
  import Experience from "./../lib/HomeElements/experience.svelte";
  import Projects from "$lib/HomeElements/projects.svelte";
  import Navbar from "$lib/svelteComponents/navbar.svelte";
  import Home from "$lib/HomeElements/home.svelte";
  import viewport from "$lib/useViewportAction";

  import { enableScroll, scrollIntoView } from "$lib";
  import School from "$lib/HomeElements/school.svelte";
	import Footer from "$lib/svelteComponents/footer.svelte";

  let tmpY: number;
  let pageY: number;
  let angle = 0;
  let passView = false;

  $: outerWidth = 0;
  $: innerWidth = 0;
  $: outerHeight = 0;
  $: innerHeight = 0;

  function updateValues() {
    angle = Math.max(-25, Math.min(25, pageY / 100));
  }

  function handleScroll() {
    updateValues();
    tmpY = pageY;

    if (pageY > innerHeight * 2) {
      console.log("CIAO");
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
  <div id="home" style="scale: {((innerHeight / (pageY + innerHeight)) * 100)}%;2">
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
  /* .connected {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    border-image: linear-gradient(140deg, #3ad0d500 80%, #1e2239 100%) 1;
    border-radius: 100%;
    border-width: 4px;
    border-style: solid;
  } */
  .wrapper-backdrop {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.12);
    display: flex;
    top: 0;
  }
  * {
    color: white !important;
  }
</style>