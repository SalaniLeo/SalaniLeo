<script lang="ts">
  import PageTransition from "$lib/transition.svelte";
  import type { LayoutServerData } from "./$types";
  import favicon from "$lib/pfp.png";
  import { onMount } from "svelte";
  import { getCookie, setTheme } from "$lib";
  let currentTheme = "light";
  let shadow: HTMLElement;
  import "../app.css";

  onMount(() => {
    if (getCookie("theme") != null) {
      currentTheme = getCookie("theme");
      document.documentElement.dataset.theme = currentTheme;
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="layout">
    <svg class="bottomwave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#5cc2c4" fill-opacity="1" d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,170.7C672,160,768,96,864,80C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <!-- <svg class="topwave" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"><path d="M 0,400 L 0,150 C 102.07655502392345,163.26315789473685 204.1531100478469,176.5263157894737 300,164 C 395.8468899521531,151.4736842105263 485.46411483253587,113.1578947368421 581,91 C 676.5358851674641,68.8421052631579 777.9904306220094,62.842105263157904 863,84 C 948.0095693779906,105.1578947368421 1016.5741626794259,153.4736842105263 1110,169 C 1203.4258373205741,184.5263157894737 1321.712918660287,167.26315789473685 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="#6fbcd4" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> -->
  <div class="root">
    <PageTransition pathname={data.pathname}>
      <slot />
    </PageTransition>
  </div>
</div>

<style>
.bottomwave {
  position: fixed;
  bottom: 0px;
  z-index: -2;
}

.layout {
  top: 0px;
  height: 100vh;
  position: absolute;
  width: 100vw;
  left: 0px;
}
.root {
  max-width: 64rem;
  margin: 1rem auto;
  margin-bottom: 0px !important;
}
@media screen and (max-width: 890px) {
.root {
  padding-top: 0px;
}
.bottomwave {
  height: 0px;
}
/* .topwave {
  min-height: 215px;
} */
}
/* .shadow {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgba(100, 100, 100, 0.1);
  box-shadow: 0px 0px 50px 10px var(--tertiary-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: -4;
} */
</style>
