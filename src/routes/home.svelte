<script>
  import matrix from "$lib/icons/matrix.png";
  function gotoMatrix() {
    window.open("https://app.element.io/#/user/@salanileo:matrix.org", "_self");
  }
</script>

<div class="container">
  <div id="left">
    <p class="title" style="font-size: 50px;">Linux and web developer</p>
    <p class="subtitle" style="transform: translateY(-30px);">
      16 year old student at <a
        href="http://www.iiscopernico.edu.it/"
        class="link">IIS Copernico</a
      ><br />Learning Linux stuff
    </p>
    <p class="button hover">
      <a href="/projects" style="color: black;">Learn more...</a>
    </p>
    <div id="icons">
      <a class="icon hover" href="https://www.github.com/salanileo"
        ><i class="fa-brands fa-square-github" /></a
      >
      <a class="icon hover" href="https://www.linkedin.com/in/leonardo-salani/"
        ><i class="fa-brands fa-linkedin" /></a
      >
      <p class="icon hover">
        <img
          src={matrix}
          alt="matrix"
          width="35px"
          style="cursor: pointer;"
          on:click={gotoMatrix}
        />
      </p>
    </div>
    <div id="github-stats">
      <p>GitHub most used languages:</p>
      <img
        width="50%"
        style="min-width: 350px;max-width: 500px; transform: translate(
        -20px, -40px
      );"
        alt="stats"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=salaniLeo&layout=donut&hide_border=true&theme=swift&hide_title=true&bg_color=00000000&langs_count=6&hide=jupyter%20notebook,tex,css,php&exclude_repo=Pacman-AI"
      /> <br />
    </div>
  </div>
</div>

<style>
  #icons {
    display: grid;
    width: min-content;
  }
  .icon {
    padding: 0px;
    margin: 0px;
    font-size: 40px;
    color: black;
  }
  p {
    color: #2a2a2a;
  }
  .link {
    width: min-content;
  }
  .link:hover {
    transform-origin: left;
    transform: scaleX(1);
  }
  .button {
    text-align: center;
    width: max-content;
    height: 30px;
    line-height: 30px;
    transform: translateY(-30px);
    color: #242424 !important;
  }
</style>
