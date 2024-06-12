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
          <h3>What am I doing now?</h3>
        </div>
        <div id="content">
          <p>Now I'm learning backend web development with flask, docker and kubernetes. I'm also improving my sveltekit knowledge, 
            thanks to coding a social media like website.</p>
        </div>
        <div id="title">
          <h3>What are my plans for the future?</h3>
        </div>
        <div id="content">
          <p>For the near future I want to create my portfolio website, to then focus on finishing high school and go to university. 
            I'm already searching for coding jobs, mainly part time so that I can still study while working.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
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
