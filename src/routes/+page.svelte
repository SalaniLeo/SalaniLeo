<script>
  import { setTheme, currentTheme } from "$lib";

  import "../app.css";
  import pfp from "$lib/pfp.png";
</script>

<div id="root">
  <div class="content">
    <div class="page" id="home">
      <div id="top" class="body-top">
        <img src={pfp} alt="me" id="pfp" />
      </div>
      <div id="home-body" class="body">
        <div id="contact-theme">
          <div id="contacts">
            <a href="mailto:leonardo07.salani@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://github.com/SalaniLeo"><i class="fa-brands fa-github"></i></a>
            <a href="https://matrix.to/#/@salanileo:matrix.org">[m]</a>
            <a href="https://www.linkedin.com/in/leonardo-salani/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
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
                  <a href="/projects" class="link">My projects</a>
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
                  <a href="/skills" class="link">My Programming Skills</a>
                  <span class="fa-solid fa-chevron-right more-arrow"></span>
                </h2>
              </div>
              <div id="subtitle">
                <p>Python, Java, C, JavaScript, Bash, CSS, HTML</p>
              </div>
              <div id="other">
                <div id="title">
                  <h2>
                    <a href="/future" class="link">My plans for the future</a>
                    <span class="fa-solid fa-chevron-right more-arrow"></span>
                  </h2>
                </div>
                <div id="title">
                  <h2>
                    <a href="/setup" class="link">My linux setup</a>
                    <span class="fa-solid fa-chevron-right more-arrow"></span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
