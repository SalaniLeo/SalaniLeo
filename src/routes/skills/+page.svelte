<div id="root">
  <div class="content">
    <div id="projects">
      <div id="top" class="body-top">
        <h2>
          <a href="/" id="back" class="link title"
            ><span><i class="fa-solid fa-chevron-left more-arrow"></i></span> Back</a
          >
        </h2>
      </div>
      <div id="projects-body" class="body">
        <div id="title">
          <h2>My coding skills</h2>
        </div>
        <div id="content">
          <p class="title">Languages I know:</p>
          <p class="text-content">
            JavaScript, TypeScript, HTML, CSS, Python, Java, C, Bash
          </p>
          <!-- <p style="font-size: 19px;">
            Other than programming languages I know quite a few other things
            (excluding what I learnt in school), like TrueNAS, NextCloud and
            many other self-hosted things, including how to setup the network. <br
            />
            I know quite well how Linux works, given that it has been more that 2
            years from when I first started using it. I also use PostmarketOS
            on my second phone.
          </p> -->
          <p class="title">Linux Distros:</p>
          <p class="text-content">Fedora, Ubuntu, Pop OS, Arch Linux, Termux</p>
          <p class="title">Frameworks:</p>
          <p class="text-content">SvelteKit, Bootstrap</p>
          <p class="title">Misc:</p>
          <p class="text-content">TrueNAS, Oauth2, WireGuard, Network Management, Docker, Git, GitHub</p>
          <p class="title">Things I self-host:</p>
          <p class="text-content">Immich, NextCloud, Ollama, BitWarden, My Minecraft Server, PhotoGallery (Coded by me), Jellyfin, AdGuard, Home Assistant</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .title {
    margin-top: 30px;
  }
  .text-content {
    color: var(--font-secondary-color);
    font-size: 17px;
    margin-bottom: 35px;
    line-height: 22px;
  }
  #top {
    display: flex;
    align-items: center;
  }
  #title {
    margin-left: 0px;
    text-align: left;
    font-size: 30px !important;
  }
  #content {
    display: unset;
    font-size: 20px;
  }
  #back:hover .more-arrow {
    transform: translateX(-10px);
  }
</style>
