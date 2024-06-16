<div id="root">
  <div class="content">
    <div class="page" id="projects">
      <div id="top" class="body-top">
        <h2>
          <a href="/" id="back" class="link title"
            ><span><i class="fa-solid fa-chevron-left more-arrow"></i></span> Back</a
          >
        </h2>
      </div>
      <div id="projects-body" class="body">
        <div id="title">
          <h2>My projects</h2>
        </div>
        <div id="content">
          <div style="margin-left: 15px;">
            <h3>Not yet released:</h3>
            <ul>
              <li>
                <a class="link" href="https://github.com/salanileo/photogallery">Photo Gallery</a>
              </li>
            </ul>
            <h3>Already published:</h3>
            <ul>
              <li>
                <a class="link" href="https://salanileo.dev">salanileo.dev</a>,
                the website you are on!
              </li>
              <li>
                <a class="link" href="https://forecast.salanileo.dev"
                  >Forecast</a
                >, a Linux weather app made with LibAdwaita in python.
              </li>
              <li>
                <a class="link" href="https://weather.salanileo.dev">Weathy</a
                >, a weather website made in sveltekit
              </li>
              <li>
                <a class="link" href="https://home.salanileo.dev">home.salanileo.dev</a>,
                a fork of bento
              </li>
            </ul>
          </div>
          <div>
            <p
              style="padding-top: 15px; font-size: 22px; font-weight: 700; padding-left: 5px; padding-bottom: 10px;"
            >
              Old projects, ~2022
            </p>
          </div>
          <div style="margin-left: 15px;">
            <ul>
              <li>
                <a class="link" href="https://github.com/SalaniLeo/Immagini"
                >Immagini</a
              > (archived), a Linux app to easily package .AppImage
              </li>
              <li>
                <a
                class="link"
                href="https://github.com/SalaniLeo/basic-CPU-info"
                >Basic CPU info</a
              > (archived), a Linux app to check CPU temperature and core clocks
              </li>
            </ul>
          </div>
          <div>
            <p
              style="padding-top: 15px; font-size: 22px; font-weight: 700; padding-left: 5px; padding-bottom: 10px;"
            >
              Everything here is avaliable on <a
                href="https://github.com/SalaniLeo/"
                class="link">my GitHub</a
              >, be sure to check everything out!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  #projects-body {
    height: fit-content;
    background-color: var(--secondary-color);
    padding: 30px;
    box-shadow: var(--shadow-color-medium) 0px 0px 10px;
    border-radius: 20px;
    border-top: var(--border-width-primary) solid var(--accent-color-secondary);
  }
  ul {
    margin: 0px;
    padding: 10px;
    line-height: 30px;
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
