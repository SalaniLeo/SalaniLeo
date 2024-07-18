<script>
  import salanileo from "$lib/assets/salanileodotdev.png";
  import forecast from "$lib/assets/forecast.png";
  import weathy from "$lib/assets/weathy.png";
  import photopallery from "$lib/assets/photogallery.png";
  import viewport from "$lib/useViewportAction";

  let prView = false;

  let card1 = false,
    card2 = false,
    card3 = false,
    card4 = false,
    card5 = false,
    card6 = false;

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
        "Guessed it... A weather website! I use it as a collection of useful maps for italy and a bit of europe.",
      langs: ["svelte", "typescript"],
    },
    {
      id: card4,
      title: "PhotoGallery",
      subtitle: "Photo hosting",
      image: photopallery,
      description:
        "Self hostable platform where you can host your photos to show to the world!",
      langs: ["svelte", "typescript", "docker", "python"],
    },
    {
      id: card5,
      title: "Dotfiles",
      subtitle: "My Arch Linux",
      image: photopallery,
      description:
        "Config files made by me for my Lenovo notebook",
      langs: [],
    },
    {
      id: card6,
      title: "ImgPush",
      subtitle: "An ImgPush fork",
      image: photopallery,
      description:
        "A modified version of imgpush for my needs",
      langs: ["python"],
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
  .card {
    width: fit-content;
    max-width: 350px;
    padding: 1rem;
    border-radius: 10px;
    background-color: var(--background-terthiary-color);
    border: 1px solid var(--background-fourth-color);
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
