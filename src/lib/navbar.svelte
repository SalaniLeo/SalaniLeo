<script>
        import { scrollIntoView } from "$lib"
</script>

<nav>
    <div class="left">
        <a class="loadanim link hide" style="animation: loadText 1s 0s forwards;" href="#home" on:click|preventDefault={scrollIntoView}>Home</a>
        <a class="loadanim link hide" style="animation: loadText 1s 0s forwards;" href="#experience" on:click|preventDefault={scrollIntoView}>Experience</a>
        <a class="loadanim link hide" style="animation: loadText 1s 0.025s forwards;" href="#projectslink" on:click|preventDefault={scrollIntoView}>Projects</a>
        <a class="loadanim link hide" style="animation: loadText 1s 0.05s forwards;" href="#footer" on:click|preventDefault={scrollIntoView}>Contact</a>
        <p class="show" style="animation: loadText 1s 0.025s forwards;">Menu</p>
    </div>
    <div class="right">
        <div id="contacts">
            <a class="loadanim contact" style="animation: loadText 1s 0.20s forwards;" id="instagram" href="https://www.instagram.com/leonardo.salanii/"><i style="transform: translateY(-25%);" class="fa-brands fa-instagram"></i></a>
            <a class="loadanim contact" style="animation: loadText 1s 0.225s forwards;" id="email" href="mailto:leonardo07.salani@gmail.com"><i style="transform: translateY(-25%);" class="fa-solid fa-envelope"></i></a>
            <a class="loadanim contact" style="animation: loadText 1s 0.25s forwards;" id="github" href="https://github.com/SalaniLeo"><i style="transform: translateY(-25%);" class="fa-brands fa-github"></i></a>
            <a class="loadanim contact" style="animation: loadText 1s 0.275s forwards;" id="linkedin" href="https://www.linkedin.com/in/leonardo-salani/"><i style="transform: translateY(-25%);" class="fa-brands fa-linkedin"></i></a>
        </div>
        <a class="loadanim link" style="animation: loadText 1s 0.3s forwards;" href="/">About</a>
    </div>
</nav>

<slot />

<style>
* {
    color: var(--text-inverted-color);
    text-decoration: none;
}

nav {
    font-weight: 900;
    font-size: 1.5rem;
    font-family: "Metrophobic", sans-serif;
    width: 100%;
    background-color: rgb(255, 255, 255);
    position: absolute;
    height: 75px;
    border-bottom: 3px solid black;
    z-index: 2;
    /* transition-duration: 1s; */
    display: flex;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
}
nav > .left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.5rem;
    padding-left: 5rem;
    flex-grow: 1;
}
nav > .right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
    padding-right: 5rem;
    flex-grow: 1;
}

nav .show {
    opacity: 0;
    display: none;
}

nav a:hover {
    animation: liftText forwards;
}
#contacts {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-right: 4rem;
}

#contacts > * {
    max-height: 20px;
    text-decoration: none;
}

.contact {
    font-size: 1.5rem;
}

.contact, .contact i {
    transition-duration: 0.25s;
}

#email:hover i {
    color: #ce3c30 !important;
}

#github:hover i {
    color: #010409 !important;
}

#instagram:hover {
    color: #d600bf !important;
}

#linkedin:hover i {
    color: #0077b5 !important;
}
@keyframes liftText {
    from {

    }
    to {
        color: var(--text-soft-color);
        /* text-shadow: black 3px 3px 3px; */
    }
}
@media only screen and (max-width: 860px) {
    nav {
        width: 100vw;
    }
    nav div{
        font-size: 1rem;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        margin-right: 0px !important;
    }
    nav .hide {
        display: none;
    }
    nav .show {
        display: unset;
    }
}
</style>