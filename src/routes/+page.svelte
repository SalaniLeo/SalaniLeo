<script lang="ts">
	import Background from "$lib/Components/background.svelte";
    import { animate } from "$lib/assets/elementLoader.svelte";
	import Coding from '$lib/Components/coding.svelte';
	import Photography from "$lib/Components/photography.svelte";

</script>

<div class="portfolio-page">
    <div class="page-root flexcolumn vexpand hexpand">
        <div class="hero-section flexrow-responsive gap6">
            <div class="hero-title flexcolumn halign valign padding3" style="flex: 1 1 auto;">
                <div class="flexcolumn gap4 fit-content center-mobile">
                    <div style={animate(0)} class="center-mobile flexcolumn font-title hstartalign">
                        <h1>Leonardo</h1>
                        <h1>Salani</h1>
                    </div>
                    <div style={animate(1)} class="hero-navigation flexrow gap3 fit-content valign font-subtitle">
                        <a href="#coding"><h2 class="link">Coding</h2></a>
                        <div class="separator" style="height: 0.75rem;"></div>
                        <a href="#photography"><h2 class="link">Photography</h2></a>
                    </div>
                </div>
            </div>

            <Coding></Coding>

        </div>
    
        <footer class="hexpand halign padding2" style={animate(8)}>
            <div class="footer-content flexrow gap3 padding-left4 padding-right4 padding3 border halign valign" style="border-radius: 20px; background-color: var(--secondary-color);">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a class="social-link" id="email" href="mailto:leonardo@salanileo.dev">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="var(--font-primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="var(--font-primary-color)" stroke-width="2" stroke-linecap="round"></path> </g></svg>            </a>
                <a class="social-link" style="margin-left: 3px;" id="github" href="https://github.com/SalaniLeo">
                    <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="var(--font-primary-color)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="var(--font-primary-color)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
                </a>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a class="social-link" id="instagram" href="https://www.instagram.com/leonardo.salanii/">
                    <svg fill="var(--font-primary-color)" width="35px" height="35px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path></g></svg>
                </a>
            </div>
        </footer>
    </div>
<Photography></Photography>
</div>


<!-- <Background></Background> -->

<style>

    :global(*)::-webkit-scrollbar {
        display: none;
    }
/* 
    :global(body) {
        overflow: hidden;
    } */

    :global(*) {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        /* background-color: var(--primary-color); */
    }
    :global(.page-root) {
        position: relative;
    }
    .hero-section {
        position: relative;
        z-index: 1;
        height: 100vh;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        :global(body) {
            overflow: scroll;
        }
        .hero-title  {
            min-height: 100vh !important;
        }
        .hero-section {
            gap: unset !important;
            height: auto;
            /* min-height: 200vh; */
        }
        .center-mobile {
            align-items: center !important;
        }

    }
</style>