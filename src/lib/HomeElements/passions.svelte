<script>
  import viewport from "$lib/useViewportAction";
  import astrobg from "$lib/assets/astroBG.jpg";
  let card1 = false,
    card2 = false;

  let passView = false;
  let passions = [
    {
      id: card1,
      title: "Photography",
      description:
        "There's nothing better than taking a photo of something beautiful, whatever it is whenever you want",
      bg: astrobg,
      link: "photography",
    },
    {
      id: card2,
      title: "Coding",
      description:
        "Creating something from the ground up is something I'll never get bored to do.",
      bg: astrobg,
      link: "coding",
    },
  ];
</script>

<div id="passions">
  <h1
    class="hidden"
    class:show={passView}
    use:viewport
    on:enterViewport={() => {
      passView = true;
    }}
    on:exitViewport={() => {
      passView = false;
    }}
  >
    What I do in my free time...
  </h1>
  <div class="cards flexbox">
    {#each passions as passion}
      <div
        class="fullcard hidden"
        class:show={passion.id}
        use:viewport
        on:enterViewport={() => {
          passion.id = true;
        }}
        on:exitViewport={() => {
          passion.id = false;
        }}
      >
        <!-- <img src={passion.bg} alt="" /> -->
        <h1>{passion.title}</h1>
        <p>{passion.description}</p>
        <a class="button notactive">Learn more | WIP</a>
      </div>
    {/each}
  </div>
</div>

<style>
  .cards {
    display: flex;
    padding: 2rem;
  }
  .fullcard {
    /* text-align: center; */
    /* width: 100%; */
    width: 300px;
    height: 325px;
    padding: 1rem;
    background-color: var(--card-background);
    backdrop-filter: var(--card-blur);
    box-shadow: var(--box-shadow);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
  .fullcard h1 {
    flex-grow: 1;
    font-size: 2.5rem;
    width: min-content;
    flex-grow: 1;
  }
  .fullcard p {
    flex-grow: 2;
    font-size: 1.5rem;
  }
  a {
    width: 150px;
    height: 50px !important;
    background-color: transparent;
    border: 3px solid var(--text-primary-color);
    box-shadow: var(--text-primary-shadow) 4px 4px 0px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition-duration: 0.25s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .notactive {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
