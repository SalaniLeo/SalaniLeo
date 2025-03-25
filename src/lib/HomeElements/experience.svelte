<script>
  import { preventDefault } from 'svelte/legacy';

  import { scrollIntoView } from "$lib";
  import viewport from "$lib/useViewportAction";

  let view1 = $state(false),
    view2 = $state(false);

</script>

<div id="experience">
  <h1
    class="hidden header"
    class:show={view1}
    use:viewport
    onenterViewport={() => {
      view1 = true;
    }}
    onexitViewport={() => {
      view1 = false;
    }}
  ><i class="fa-solid fa-circle-dot"></i>
   Experience</h1>
  <div class="tleft margin-left">
    <p
      class="hidden"
      class:show={view2}
      use:viewport
      onenterViewport={() => {
        view2 = true;
      }}
      onexitViewport={() => {
        view2 = false;
      }}
    >
        I don't have any work experience yet (I hope it will change soon). To see what I've published you can head over to the <a
        href="#projects"
        onclick={preventDefault(scrollIntoView)}>Projects</a
      > section, otherwise all my projects are on <a href="https://github.com/salanileo">GitHub</a>, including the unfinished ones.
    </p>
  </div>
</div>
