<script lang="ts">
  import Weather from "./weather.svelte";
  import Home from "./home.svelte";
  import "../app.css";
  import Forecast from "./forecast.svelte";
  import Immagini from "./immagini.svelte";
  import Other from "./other.svelte";
  import { scrollIntoView } from "$lib/index";
</script>

<head>
  <link
    href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    rel="stylesheet"
  />
</head>

<div class="root">
  <div id="scrollview">
    <div id="Home" class="full border">
      <Home />
    </div>
    <div id="Forecast" class="border">
      <Forecast />
    </div>
    <div id="Weather" class="border">
      <Weather />
    </div>
    <div id="Immagini" class="border">
      <Immagini />
    </div>
    <div id="Other" class="full">
      <Other />
    </div>
  </div>
  <div id="right">
    <div id="rightcontent">
      <h1>Work</h1>
      <div id="projects">
        <a
          on:click|preventDefault={scrollIntoView}
          href="#Forecast"
          class="link hover">Forecast</a
        >
        <a
          on:click|preventDefault={scrollIntoView}
          href="#Weather"
          class="link hover">Weather</a
        >
        <a
          on:click|preventDefault={scrollIntoView}
          href="#Immagini"
          class="link hover">Immagini</a
        >
        <a
          on:click|preventDefault={scrollIntoView}
          href="#Other"
          class="link hover">Other...</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  #scrollview {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    width: fit-content;
    height: 10px;
  }
  .root {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  #rightcontent {
    position: fixed;
    top: 35%;
    transform: translateY(-50%);
    right: 10%;
    max-width: 250px;
  }
  #projects {
    position: relative;
    width: 150px;
    display: grid;
    height: 200px;
    padding: 40px;
    background-color: var(--body-color-light);
  }

  #projects::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 1) 5%,
      var(--body-color-light) 20%,
      var(--body-color-light) 80%,
      rgba(0, 0, 0, 1) 95%
    );
  }

  .link {
    width: fit-content;
  }

  #projects > a {
    height: 30px;
  }
</style>
