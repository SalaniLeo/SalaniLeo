<script>
  import { preventDefault } from 'svelte/legacy';

  import { scrollIntoView } from "$lib";
</script>

<div id="home">
  <div id="home-wrapper">
    <h1 class="loadanim name" style="animation: loadText 1s 0.10s forwards;">
      Leonardo Salani
    </h1>
    <h2
      class="loadanim occupation"
      style="animation: loadText 1s 0.2s forwards;"
    >
      Software Developer
    </h2>
    <a
      style="animation: loadText 1s 0.3s forwards;
      margin-top: 3rem"
      class="button margin hidden"
      href="#work"
      onclick={preventDefault(scrollIntoView)}>Click!</a
    >
  </div>
</div>
