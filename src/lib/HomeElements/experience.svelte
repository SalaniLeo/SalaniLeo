<script>
  import { scrollIntoView } from "$lib";
  import viewport from "$lib/useViewportAction";

  let expView = false;
</script>

<div
  id="experience"
  class="hidden"
  class:show={expView}
  use:viewport
  on:enterViewport={() => {
    expView = true;
  }}
  on:exitViewport={() => {
    expView = false;
  }}
>
  <h1>Experience</h1>
  <div class="tleft">
    <p>
      I don't have any work experience yet, since I'm only 17 (already to old in
      my opinion :D). To see what I've published you can head to the <a
        href="#projects"
        on:click|preventDefault={scrollIntoView}>Projects</a
      > section, otherwise all my projects are on GitHub
    </p>
  </div>
</div>
