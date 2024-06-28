<script>
    import salanileo from "../static/salanileodotdev.png"
    import forecast from "../static/forecast.png"
    import weathy from "../static/weathy.png"
    import missing from "../static/missing.svg"
	import viewport from '$lib/useViewportAction';

    let card1 = false, card2 = false, card3 = false, card4 = false

    let cards = [
        {id: card1, title: 'SalaniLeo', subtitle: "This exact website", image: salanileo, description: "The website you are currently on. I made it using sveltekit.", langs: ["svelte", "typescript", "css"]},
        {id: card2, title: 'Forecast', subtitle: "Weather app", image: forecast, description: "A weather app for linux. I use it every time I need to watch the weather.", langs: ["python", "openweathermap"]},
        {id: card3, title: 'Weathy', subtitle: "Weather website", image: weathy, description: "Guessed it... A weather website! I use it as a collection of useful maps for italy and a bit of europe.", langs: ["svelte", "typescript", "css", "openweathermap"]},
        {id: card4, title: 'PhotoGallery', subtitle: "Photo Library", image: missing, description: "Self hostable platform where you can host your photos to show to the world!", langs: ["svelte", "typescript", "css", "docker", "python"]},
    ]

</script>

<div class="cards flexbox">
    {#each cards as card}
        <div class="card hidden" class:show={card.id} use:viewport 
            on:enterViewport={() => {card.id = true}}
            on:exitViewport={() => {card.id = false}}
        >
            <div class="header">
                <h1>{card.title}</h1>
                <a class="github repo" href="https://github.com/SalaniLeo/{card.title}"><i class="fa-brands fa-github"></i></a>
            </div>
            <h2>{card.subtitle}</h2>
            <div class="image">
                <img src="{card.image}" class="cardimage" alt="{card.title}">
            </div>
            <p>{card.description}</p>
            <div class="langs flexbox">
                {#each card.langs as lang}
                    <i class="lang" id="{lang}">{lang}</i>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .card {
        width: 300px;
        padding: 1rem;
        border-radius: 10px;
        background-color: var(--background-primary-color);
        box-shadow: var(--box-shadow);
        display: flex;
        flex-direction: column;
    }
    .card:hover {
        box-shadow: var(--box-shadow-hover);
    }
    .repo {
        text-shadow: var(--box-shadow);
    }
</style>