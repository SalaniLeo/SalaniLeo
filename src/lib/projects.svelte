<script>
    import salanileodotdev from "../static/salanileodotdev.png"
    import forecast from "../static/forecast.png"
    import weathy from "../static/weathy.png"
</script>

<div class="cards flexbox">
    <div class="card">
        <div class="header">
            <h1>SalaniLeo</h1>
            <a class="github repo" href="https://github.com/SalaniLeo/SalaniLeo"><i class="fa-brands fa-github"></i></a>
        </div>
        <h2>This exact website</h2>
        <div class="image">
            <img class="cardimage" src="{salanileodotdev}" alt="img">
        </div>
        <p>The website you are currently on. I made it using sveltekit.</p>
        <div class="langs flexbox">
            <i class="lang" id="svelte">svelte</i><i class="lang" id="css">css</i><i class="lang" id="typescript">typescript</i>
        </div>
    </div>
    <div class="card">
        <div class="header">
            <h1>Forecast</h1>
            <a class="github repo" href="https://github.com/SalaniLeo/Forecast"><i class="fa-brands fa-github"></i></a>
        </div>
        <h2>Weather app</h2>
        <div class="image">
            <img class="cardimage" src="{forecast}" alt="img">
        </div>
        <p>A weather app for linux. I use it every time I need to watch the weather.</p>
        <div class="langs flexbox">
            <i id="openweathermap" class="lang">openweathermap</i> <i class="lang" id="python">python</i>
        </div>
    </div>
    <div class="card">
        <div class="header">
            <h1>Weathy</h1>
            <a class="github repo" href="https://github.com/SalaniLeo/Weathy"><i class="fa-brands fa-github"></i></a>
        </div>
        <h2>Weather website</h2>
        <div class="image">
            <img class="cardimage" src="{weathy}" alt="img">
        </div>
        <p>Guessed it... A weather website! I use it as a collection of useful maps for italy and a bit of europe.</p>
        <div class="langs flexbox">
            <i id="openweathermap" class="lang">openweathermap</i> <i class="lang" id="css">css</i><i class="lang" id="typescript">typescript</i> <i id="svelte" class="lang">svelte</i>
        </div>
    </div>
    <div class="card">
        <div class="header">
            <h1>PhotoGallery</h1>
            <a class="github repo" href="https://github.com/SalaniLeo/Weathy"><i class="fa-brands fa-github"></i></a>
        </div>
        <h2>Photo Library</h2>
        <div class="image">
            <p>Screenshot missing :p</p>
            <!-- <img class="cardimage" src="{weathy}" alt="img"> -->
        </div>
        <p>Self hostable platform where you can host your photos to show to the world!</p>
        <div class="langs flexbox">
            <i class="lang" id="css">css</i><i class="lang" id="typescript">typescript</i><i class="lang" id="docker">docker</i><i class="lang" id="python">python</i> <i id="svelte" class="lang">svelte</i>
        </div>
    </div>
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
    .repo {
        text-shadow: var(--box-shadow);
    }
</style>