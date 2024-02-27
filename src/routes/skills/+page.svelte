<script>
  import Background from "$lib/background.svelte";
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
          <h2>What languages do I know?</h2>
        </div>
        <div id="content">
          <p class="title">I know a couple of languages, and they are:</p>
          <p class="text-content">
            Python, Java, C, JavaScript, Bash, CSS, HTML
          </p>
          <p style="font-size: 19px;">
            Other than programming languages I know quite a few other things
            (excluding what I learnt at school), like TrueNAS, NextCloud and
            many other self-hosted things, including how to setup the network. <br
            />
            I know quite well how Linux works, given that it has been more that 2
            years from when I first started using it, and I also use PostmarketOS
            in my second phone.
          </p>
          <p class="title">Linux:</p>
          <p class="text-content">Fedora, Ubuntu, Arch, Termux</p>
          <p class="title">web:</p>
          <p class="text-content">SvelteKit, bootstrap</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .title {
    /* color: var(--accent-color-primary); */
    margin-top: 30px;
  }
  .text-content {
    color: var(--accent-color-primary);
    font-size: 17px;
    /* line-height: 0px; */
    margin-bottom: 35px;
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
