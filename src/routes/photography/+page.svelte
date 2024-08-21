<script>
  import Navbar from "$lib/svelteComponents/navbar.svelte";
  import bg from "$lib/assets/astroBG.jpg";
</script>

<div class="root">
  <div id="photo-placeholder"></div>
  <div id="photo-wrap">
    <img id="photo-top" src={bg} alt="" />
  </div>
  <div id="content" class="wrapper">
    <h1>Photography</h1>
    <h3></h3>
  </div>
</div>

<style>
  #photo-placeholder {
    width: 100%;
    height: 700px;
    position: relative;
    z-index: -1;
    background-color: transparent;
  }
  #photo-wrap {
    top: 0;
    z-index: 1;
    width: 100%;
    height: 700px;
    max-height: 100vh;
    overflow: hidden;
    position: fixed;
  }

  #photo-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  #content {
    border-top: 4px solid var(--background-primary-color);
    position: relative;
  }

  @media only screen and (max-width: 860px) {
    #photo-wrap,
    #photo-placeholder {
      height: 300px;
    }
  }
</style>
