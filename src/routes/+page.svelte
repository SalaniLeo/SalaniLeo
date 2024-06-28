<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Projects from "$lib/projects.svelte";
    import Navbar from "$lib/navbar.svelte";
    import Home from "$lib/home.svelte";
	import viewport from '$lib/useViewportAction';

    let tmpY: number
    let pageY: number
    let angle = 0
    let prView = false
    let expView = false

    $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0

    function updateValues() {
        angle = Math.max(-25, Math.min(25, pageY / 100));
    }

    function handleScroll() {
        updateValues()
        tmpY = pageY
    }

    function showElement() {

    }

</script>

<svelte:window on:scroll={handleScroll} bind:scrollY={pageY} bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight/>

<div class="root">
    <Home></Home>
    <Navbar></Navbar>
    <div class="page" id="work">
        <div class="tleft wrapper">
            <div id="experience" class="hidden" class:show={expView} use:viewport 
                    on:enterViewport={() => {expView = true}}
                    on:exitViewport={() => {expView = false}}
                >
                <h1>Experience</h1>
                <div class="tleft">
                    <p>I don't have any work experience yet, since I'm only 17 (already to old in my opinion :D). You can see what I've worked on in the <a href="#projects">Projects</a> section</p>
                </div>
            </div>
        
            <div id="projectslink">
                <h1 class="hidden" class:show={prView} use:viewport 
                    on:enterViewport={() => {prView = true}}
                    on:exitViewport={() => {prView = false}}
                >Projects</h1>
                <div id="projects">
                    <Projects></Projects>
                </div>
            </div>

            <div id="school">
                <h1>School</h1>
                <div class="tleft">
                    <p>I study computer science at <a href="http://www.iiscopernico.edu.it/">IIS Copernico</a>. I plan on going to university in computer engineering // TODO
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>