<script>
  import { setTheme, currentTheme } from "$lib";

  import "../app.css";
  import pfp from "$lib/pfp.png";
</script>

<div id="root">
  <div class="content">
    <div class="page" id="home">
      <div id="top">
        <img src={pfp} alt="me" id="pfp" />
      </div>
      <div id="home-body" class="body">
        <div id="theme-select">
          {#if $currentTheme == "dark"}
            <i
              class="fa-regular fa-sun themer"
              on:click={() => setTheme("light", true)}
            ></i>
          {:else}
            <i
              class="fa-regular fa-moon themer"
              on:click={() => setTheme("dark", true)}
            ></i>
          {/if}
        </div>
        <div id="title" class="title-top">
          <h2>Leonardo Salani</h2>
        </div>
        <div id="content">
          <div id="left">
            <div id="subtitle">
              <p>🌍 From Ferrara, Italy</p>
              <p>👦 17 Year old</p>
              <p>🏫 Student at IIS Copernico</p>
              <p>
                <i class="fa-brands fa-linux" style="color: #ffffff;"></i> I use
                arch btw
                <a class="link" href="https://github.com/salanileo/dotfiles"
                  >(dotfiles)</a
                >
              </p>
            </div>
            <div id="projects">
              <div id="title">
                <h2>
                  <a href="/projects" class="link">What have I worked on?</a>
                  <span class="fa-solid fa-chevron-right more-arrow"></span>
                </h2>
              </div>
              <div id="subtitle">
                <p>🌐 My website (this one)</p>
                <p>⛅ Forecast (weather app)</p>
                <p>⛅ Weathy (weather website)</p>
              </div>
            </div>
          </div>
          <div id="right">
            <div id="languages">
              <div id="title">
                <h2>
                  <a href="/skills" class="link">What languages do I know?</a>
                  <span class="fa-solid fa-chevron-right more-arrow"></span>
                </h2>
              </div>
              <div id="subtitle">
                <p>Python, Java, C, JavaScript, Bash, CSS, HTML</p>
              </div>
              <div id="title">
                <h2>
                  <a href="/now" class="link">What am I doing now?</a>
                  <span class="fa-solid fa-chevron-right more-arrow"></span>
                </h2>
              </div>
              <div id="subtitle"><p>Learning stuff...</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
