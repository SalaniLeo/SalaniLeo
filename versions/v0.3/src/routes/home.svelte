<script>
  import matrix from "$lib/icons/matrix.png";
  import linkedin from "$lib/icons/linkedin.png";
  import github from "$lib/icons/github.png";
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
    <!-- <p class="button hover">
      <a href="/projects" style="color: var(--text-color-seondary)"
        >Learn more...</a
      >
    </p> -->
    <div id="icons">
      <a class="icon hover" href="https://www.github.com/salanileo">
        <img
          src={github}
          alt="github"
          width="35px"
          style="cursor: pointer;"
        /></a
      >
      <a class="icon hover" href="https://www.linkedin.com/in/leonardo-salani/">
        <img
          src={linkedin}
          alt="linkedin"
          width="35px"
          style="cursor: pointer;"
        />
      </a>
      <a
        class="icon hover"
        href="https://app.element.io/#/user/@salanileo:matrix.org"
      >
        <img src={matrix} alt="matrix" width="35px" style="cursor: pointer;" />
      </a>
    </div>
    <div id="github-stats">
      <p>GitHub most used languages:</p>
      <img
        width="50%"
        style="min-width: 350px;max-width: 500px; transform: translate(
        -20px, -40px
      );"
        alt="stats"
        class="icon"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=salaniLeo&text_color=000000&show_icons&layout=donut&hide_border=true&theme=swift&hide_title=true&bg_color=00000000&langs_count=8"
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
    color: var(--text-color-seondary);
  }
  p {
    color: var(--text-color);
  }
  .link {
    width: min-content;
  }
  .link:hover {
    transform-origin: left;
    transform: scaleX(1);
  }
</style>
