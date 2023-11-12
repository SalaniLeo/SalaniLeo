<script lang="ts">
  import Background from "./background.svelte";
  import About from "./about/+page.svelte";
  import Home from "./home.svelte";
  import "../app.css";
</script>

<head>
  <link
    href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    rel="stylesheet"
  />
</head>

<main>
  <div class="root">
    <Background />
    <div class="homelayout">
      <Home />
    </div>
  </div>
</main>

<style>
  :global(body) {
    margin: 0px;
  }
</style>
