<script lang=ts>
  import viewport from "$lib/useViewportAction";

  let prView = $state(false);

  let cards = $state([
    {
      title: "SalaniLeo",
      subtitle: "This exact website",
      description:
        "The website you are currently on. I made it using sveltekit.",
      langs: ["svelte", "typescript"],
    },
    {
      title: "Forecast",
      subtitle: "Weather app",
      description:
        "A weather app for linux. I use it every time I need to watch the weather.",
      langs: ["python"],
    },
    {
      title: "Weathy",
      subtitle: "Weather website",
      description:
        "A weather website I use as a collection of useful maps for Italy and a bit of Europe.",
      langs: ["svelte", "typescript"],
    },
    {
      title: "SweatyRSS",
      subtitle: "RSS reader",
      image: undefined,
      description:
        "A self-hostable rss reader with basic functionality.",
      langs: ["python", "svelte", "typescript", "docker"],
    },
    {
      title: "PhotoGallery",
      subtitle: "Photo hosting",
      description:
        "This project is no longer maintained. I worked on it to learn flask, so it's trash :D",
      langs: ["svelte", "typescript", "docker", "python"],
    },
    {
      title: "SalaniLeo's Classeviva",
      subtitle: "A Classeviva frontend",
      image: undefined,
      description:
        "A frontend for Spaggiari Classeviva, the most used italian register",
      langs: ["svelte", "typescript", "docker"],
    },
    {
      title: "Platforms",
      subtitle: "A LinkTree-like website",
      image: undefined,
      description:
        "A website where all my socials are in one place",
      langs: ["svelte"],
    },
    {
      title: "Dotfiles",
      subtitle: "My Arch Linux",
      image: undefined,
      description:
        "I no longer use them, but here they are",
      langs: ["linux"],
    }
  ]);

  $effect(() => {
    let i = 0;
    for (let card of cards) {
      card.id = "card" + i;
      i++;
    }
  })
</script>

<div id="projectslink">
  <h1
    class="hidden header"
    class:show={prView}
    use:viewport
    onenterViewport={() => {
      prView = true;
    }}
    onexitViewport={() => {
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
          onenterViewport={() => {
            card.id = true;
          }}
          onexitViewport={() => {
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
    /* max-width: 350px; */
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
    h1 {
      font-size: 34px !important;
    }
    h2 {
      font-size: 26px !important;
    }
    #projects{ 
        padding: 0rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
  }
</style>
