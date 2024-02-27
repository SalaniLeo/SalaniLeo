<script>
  import Background from "./../lib/background.svelte";
  import "../app.css";
  import pfp from "$lib/pfp.png";
</script>

<div id="root">
  <!-- <Loader></Loader> -->
  <!-- <nav class="navbar"><p>a</p></nav> -->
  <div class="content">
    <div class="page" id="home">
      <div id="top">
        <img src={pfp} alt="me" id="pfp" />
        <!-- <div id="terminal">
					<p>{terminal_name}</p>
				</div> -->
      </div>
      <div id="home-body" class="body">
        <div id="title" class="title-top">
          <h2>Leonardo Salani</h2>
        </div>
        <div id="content">
          <div id="left">
            <div id="subtitle">
              <p>🌍 From Ferrara, Italy</p>
              <p>👦 17 Year old</p>
              <p>🏫 Student at IIS Copernico</p>
              <p>🐧 Microsoft is shit</p>
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
                  <a href="/future" class="link"
                    >What will I learn in the future?</a
                  >
                  <span class="fa-solid fa-chevron-right more-arrow"></span>
                </h2>
              </div>
              <div id="subtitle"><p>Rust, TypeScript, Kotlin</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
