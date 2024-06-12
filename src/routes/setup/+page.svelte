<script>
  import neofetch from "$lib/neofetch.png"
</script>

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
          <h3>My home setup</h3>
        </div>
        <div id="content">
          <p class="title">Both my laptop and pc run Arch Linux with gnome, but I also have Hyprland installed.</p>
          <!-- <p class="text-content">
            JavaScript, TypeScript, HTML, CSS, Python, Java, C, Bash
          </p> -->
          <img src="{neofetch}" alt="neofetch">
          <p class="title">I also have a lot of self hosted apps like nextcloud, immich, ollama, and more hosted on my server, which runs on TrueNAS </p>

        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .title {
    margin-top: 30px;
  }
  img {
    width: 50%;
  }
  img:hover {
    width: 100%;
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
  @media screen and (max-width: 890px) {
    img {
      width: 100%;
    }
  }
</style>
