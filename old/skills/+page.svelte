<script>
  import Background from "../../src/routes/background.svelte";
</script>

<head>
  <link
    href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    rel="stylesheet"
  />
</head>

<Background />
<a href="/" class="button" id="back"><i class="fa-solid fa-arrow-left" /></a>
<div class="bgroot">
  <div class="skillspage">
    <h1>My skills</h1>
    <div id="linux">
      <div id="distros">
        Linux Distros:
        <p />
      </div>
    </div>
  </div>
</div>

<style>
  .skillspage {
    border: solid 3px black;
    font-size: 30px;
    padding-left: 35px;
    margin: 140px;
    z-index: -1;
    /* text-align: center; */
  }
</style>
