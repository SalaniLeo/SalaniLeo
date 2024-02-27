<script>
  import Background from "../background.svelte";
</script>

<head>
  <link
    href="./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    rel="stylesheet"
  />
</head>

<Background />
<a href="/" class="button" id="back"><i class="fa-solid fa-arrow-left" /></a>
<div id="aboutroot">
  <div id="title">
    <p class="title">Linux and web developer</p>
  </div>
  <div id="description">
    <p>
      16 years old student at <a
        href="http://www.iiscopernico.edu.it/"
        class="link">IIS Copernico</a
      ><br />Learning Linux stuff
    </p>
  </div>
  <div class="center">
    <div id="projects">a</div>
    <div id="about">a</div>
    <div id="skill">a</div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap");
  #aboutroot {
    top: 0px;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: 1;
    background-color: #242424;
    overflow: hidden;
    /* animation-name: loadPage;
    animation-duration: 1.5s;
    /* animation-delay: 1s; */
    /* animation-fill-mode: forwards; */
  }
  .title {
    position: relative;
    color: wheat;
    font-family: "Josefin Sans", sans-serif;
    text-align: center;
    font-size: 50px;
    top: 40px;
  }

  #description {
    text-align: center;
    font-size: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .center {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 0px;
    position: relative;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: bisque; */
    width: 50%;
  }

  @keyframes loadPage {
    0% {
      scale: 0%;
      border-radius: 50%;
    }
    100% {
      opacity: 1;
      background-color: #242424;
      scale: 100%;
      border-radius: 0px;
    }
  }
</style>
