<script>
  // @ts-nocheck

  import {
    setTheme,
    currentTheme,
    toggleRandomTheme,
    randomTheme,
    setRandomTheme,
  } from "$lib";

  let random = true;

  randomTheme.subscribe((bool) => {
    random = bool;
  });

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
          <div id="random-select">
            {#if $randomTheme}
              <small>Random</small>
            {:else}
              <small>Try Random!</small>
            {/if}
            <label class="switch">
              {#if $randomTheme}
                <input type="checkbox" checked on:click={toggleRandomTheme} />
                <span class="slider round"></span>
              {:else}
                <input type="checkbox" on:click={toggleRandomTheme} />
                <span class="slider round"></span>
              {/if}
            </label>
          </div>
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          {#if random}
            <div class="switcher">
              <button class="theme-switcher" on:click={setRandomTheme}
                ><i class="fa-solid fa-bolt"></i></button
              >
            </div>
          {:else}
            <div class="switcher">
              {#if $currentTheme == "dark"}
                <button
                  class="theme-switcher"
                  on:click={() => setTheme("light", true)}
                  ><i class="fa-regular fa-sun"></i></button
                >
              {:else}
                <button
                  class="theme-switcher"
                  on:click={() => setTheme("dark", true)}
                  ><i class="fa-regular fa-moon"></i></button
                >
              {/if}
            </div>
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
                <p>JavaScript, TypeScript, HTML, CSS, Python, Java, C, Bash</p>
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
