<script>
  import { setTheme, currentTheme } from "$lib";
  import pfp from "$lib/pfp.png";
</script>

<script context="module">
  export async function load({ session }) {
      console.log(session.userAgent)
  }
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
            <a href="https://matrix.to/#/@salanileo:matrix.org"><p class="icon">[m]</p></a>
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
              <p>💤 17 Year old</p>
              <p>🏫 Student at ITI Copernico</p>
              <p>
                <i class="fa-brands fa-linux"></i> I use
                arch btw
                <a class="link" href="https://github.com/salanileo/dotfiles"
                  >(dotfiles)</a
                >
              </p>
            </div>
            <div id="projects">
              <div id="title">
                <h2>
                  <a href="/projects" class="link">My projects<span class="fa-solid fa-chevron-right more-arrow"></span></a>
                </h2>
              </div>
              <div id="subtitle">
                <ul>
                  <li><a href="https://salanileo.dev">SalaniLeo.dev</a>, My Website</li>
                  <li><a href="https://forecast.salanileo.dev">Forecast</a>, Weather App for Linux</li>
                  <li><a href="https://weather.salanileo.dev">Weathy</a>, Weather Website</li>
                  <li>... And much more on <a href="https://github.com/salanileo">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="right">
            <div id="languages">
              <div id="title">
                <h2>
                  <a href="/skills" class="link">My coding Skills<span class="fa-solid fa-chevron-right more-arrow"></span></a>
                </h2>
              </div>
              <div id="subtitle" style="width: 300px; text-align: center;">
                <p>JavaScript, TypeScript, HTML, CSS, Python, Java, C, Bash</p>
              </div>
              <!-- <div id="other">
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
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
