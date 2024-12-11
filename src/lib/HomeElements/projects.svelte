<script>
  import salanileo from "$lib/assets/salanileodotdev.png";
  import forecast from "$lib/assets/forecast.png";
  import weathy from "$lib/assets/weathy.png";
  import photogallery from "$lib/assets/photogallery.png";
  import viewport from "$lib/useViewportAction";

  let prView = false;

  let card1 = false,
      card2 = false,
      card3 = false,
      card4 = false,
      card5 = false,
      card6 = false,
      card7 = false,
      card8 = false;

  let cards = [
    {
      id: card1,
      title: "SalaniLeo",
      subtitle: "This exact website",
      image: salanileo,
      description:
        "The website you are currently on. I made it using sveltekit.",
      langs: ["svelte", "typescript"],
    },
    {
      id: card2,
      title: "Forecast",
      subtitle: "Weather app",
      image: forecast,
      description:
        "A weather app for linux. I use it every time I need to watch the weather.",
      langs: ["python"],
    },
    {
      id: card3,
      title: "Weathy",
      subtitle: "Weather website",
      image: weathy,
      description:
        "A weather website I use as a collection of useful maps for Italy and a bit of Europe.",
      langs: ["svelte", "typescript"],
    },
    {
      id: card4,
      title: "PhotoGallery",
      subtitle: "Photo hosting",
      image: photogallery,
      description:
        "Self hostable platform where you can host your photos to show the world!",
      langs: ["svelte", "typescript", "docker", "python"],
    },
    {
      id: card8,
      title: "SalaniLeo's Classeviva",
      subtitle: "A Classeviva frontend",
      image: undefined,
      description:
        "A frontend for Spaggiari Classeviva, the most used italian register",
      langs: ["svelte", "typescript", "docker"],
    },
    {
      id: card5,
      title: "Dotfiles",
      subtitle: "My Arch Linux",
      image: undefined,
      description:
        "Config files made by me for my Lenovo notebook",
      langs: [],
    },
    {
      id: card6,
      title: "ImgPush",
      subtitle: "An ImgPush fork",
      image: undefined,
      description:
        "A modified version of imgpush for my needs",
      langs: ["python"],
    },
    {
      id: card7,
      title: "Platforms",
      subtitle: "A LinkTree-like website",
      image: undefined,
      description:
        "A website where all my socials are in one place",
      langs: ["svelte"],
    },
  ];
</script>

<div id="projectslink">
  <h1
    class="hidden header"
    class:show={prView}
    use:viewport
    on:enterViewport={() => {
      prView = true;
    }}
    on:exitViewport={() => {
      prView = false;
    }}
  ><i class="fa-solid fa-circle-dot"></i>
    Projects
  </h1>
  <div id="projects">
    <div class="cards flexbox">
      {#each cards as card}
        <div
          class="card hidden"
          class:show={card.id}
          use:viewport
          on:enterViewport={() => {
            card.id = true;
          }}
          on:exitViewport={() => {
            card.id = false;
          }}
        >
          <div class="header">
            <h1>{card.title}</h1>
            <a
              class="github repo"
              href="https://github.com/SalaniLeo/{card.title}"
              ><i class="fa-brands fa-github"></i></a
            >
          </div>
          <h2>{card.subtitle}</h2>
          <div class="image">
            <!-- <img src={card.image} class="cardimage" alt={card.title} /> -->
          </div>
          <p>{card.description}</p>
          <div class="langs flexbox">
            {#each card.langs as lang}
              <i class="lang" id={lang}>{lang}</i>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .header {
    align-items: start;
  }
  h1 {
    line-height: 2.5rem;
  }
  .card {
    width: fit-content;
    max-width: 350px;
    padding: 1rem;
    border-radius: 10px;
    background-color: var(--background-terthiary-color);
    border: 2px solid var(--border-color);
    display: flex;
    height: fit-content;
    min-height: 200px;
    flex-direction: column;
  }
  /* .card:hover {
    box-shadow: var(--box-shadow-hover);
  } */
  .repo {
    text-shadow: var(--box-shadow);
  }
  h1 {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media only screen and (max-width: 720px) {
    #projects{ 
        padding: 0rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
  }
</style>
