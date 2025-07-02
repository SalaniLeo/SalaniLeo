<script>
  import viewport from "$lib/useViewportAction";
  let view1 = $state(false),
    view2 = $state(false);
</script>

<div id="school">
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
    School
  </h1>
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
      I study IT at Unife, I am currently in my fist year of university. 
    </p>
    <!-- <a
      class="button"
      href="http://www.iiscopernico.edu.it/"
      class:show={view3}
      use:viewport
      on:enterViewport={() => {
        view3 = true;
      }}
      on:exitViewport={() => {
        view3 = false;
      }}>IIS Copernico</a
    > -->
  </div>
</div>

<style>
  #school {
    margin-bottom: 1rem;
  }
</style>
