<script>
  // import Helper from "../app";
  function gotoGitHub() {
    window.open("https://github.com/SalaniLeo", "_self");
  }
  function gotoAbout() {
    
  }
</script>

<div class="topbar">
  <a on:click={gotoAbout} href="/about" class="button" id="whoami">Who am I?</a>
  <div class="alignright">
    <a href="/" class="button">Contact</a>
    <a href="/" class="button">GitHub</a>
  </div>
</div>

<slot />

<style>
</style>
