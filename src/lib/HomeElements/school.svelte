<script>
  import viewport from "$lib/useViewportAction";
  let view1 = $state(false),
    view2 = $state(false);

  let { showdocuments = $bindable() } = $props()

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
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="tleft margin-left">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
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
      I study IT at <a href="https://www.unife.it/" target="_blank">Unife</a>, currently in my first year of university.
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      To see my certifications, cv and other documents click <span style="text-decoration: underline; cursor: pointer;" onclick={() => {
        showdocuments = !showdocuments;
      }}>here</span>.</p>

  </div>
</div>

<style>
  #school {
    margin-bottom: 1rem;
  }
</style>
