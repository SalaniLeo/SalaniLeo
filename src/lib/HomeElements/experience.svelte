<script>
  import { scrollIntoView } from "$lib";
  import viewport from "$lib/useViewportAction";

  let view1 = false,
    view2 = false;

</script>

<div id="experience">
  <h1
    class="hidden header"
    class:show={view1}
    use:viewport
    on:enterViewport={() => {
      view1 = true;
    }}
    on:exitViewport={() => {
      view1 = false;
    }}
  ><i class="fa-solid fa-circle-dot"></i>
   Experience</h1>
  <div class="tleft margin-left">
    <p
      class="hidden"
      class:show={view2}
      use:viewport
      on:enterViewport={() => {
        view2 = true;
      }}
      on:exitViewport={() => {
        view2 = false;
      }}
    >
        I don't have any work experience yet (I hope it will change soon). To see what I've published you can head over to the <a
        href="#projects"
        on:click|preventDefault={scrollIntoView}>Projects</a
      > section, otherwise all my projects are on <a href="https://github.com/salanileo">GitHub</a>, including the unfinished ones.
    </p>
  </div>
</div>
