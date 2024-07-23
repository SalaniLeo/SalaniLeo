<script>
  import viewport from "$lib/useViewportAction";
  let view1 = false,
    view2 = false;
</script>

<div id="school">
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
    School
  </h1>
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
      I study computer science at IIS Copernico. I plan on going to university
      to study computer engineering. 
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
