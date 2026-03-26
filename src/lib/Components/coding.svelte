<script lang="ts">
    import { animate } from "$lib/assets/elementLoader.svelte";
	import { onMount } from "svelte";

    let projects = [
        {
            name: "Well, myself",
            description: "A curious human being from Ferrara, Italy. Currently studying at Unife. Shoutout to the ones who created me.",
            date: "2007 - now",
            langs: ['Italian', 'English']
        },
        {
            name: "Forecast",
            description: "Weather app for Linux. Made to learn Python in 2023, archived in 2025.",
            date: "2023 - 2025",
            langs: ['Python']
        },
        {
            name: "Metsa",
            description: "Guess what... Made specifically for Ferrara, Italy, to check climate conditions, satellite imagery, and space weather. It collects my most used climate information sources into one place for easy access.",
            date: "2024 - now",
            langs: ['Svelte']
        },
        {
            name: "My homelab",
            description: "Not exactly easy to show, but I self-host a lot of things, such as Home Assistant, Jellyfin, Adguard, Immich, NextCloud, Ollama, and much more.",
            date: "2025 - now",
            langs: ['Proxmox', 'TrueNAS', 'Ubuntu Server']
        },
        {
            name: "More",
            description: "Check out my <a href='https://github.com/salanileo'>GitHub</a>!",
            date: "Only history will tell",
        }
    ]


	let canvasElement: HTMLCanvasElement;

	function drawAnimatedLinesBetweenAnchors() {
		if (!canvasElement) return;

    const anchors = document.querySelectorAll('.project-marker') as NodeListOf<HTMLElement>;
		if (anchors.length < 2) return;

		const ctx = canvasElement.getContext('2d')!;

		canvasElement.width = window.innerWidth;
		canvasElement.height = document.documentElement.scrollHeight;

		ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

		const positions = Array.from(anchors).map((anchor) => {
			const rect = anchor.getBoundingClientRect();
			return {
				x: rect.left + rect.width / 2,
				y: rect.top + window.scrollY + rect.height / 2
			};
		});

        var style = window.getComputedStyle(document.body)
		const outlineColor = style.getPropertyValue('--font-secondary-color')
		ctx.strokeStyle = outlineColor;
		ctx.lineWidth = 2;

		let animationFrame = 0;
		const animationDuration = 120;
		const staggerDelay = 120; 

		function animateLine(startIndex: number, startTime: number) {
			const now = Date.now() - startTime;
			const lineDelay = startIndex * staggerDelay;
			const lineStartTime = Math.max(0, now - lineDelay);
			const progress = Math.min(1, lineStartTime / animationDuration);

			if (progress < 1) {
				const start = positions[startIndex];
				const end = positions[startIndex + 1];

				const currentEnd = {
					x: start.x + (end.x - start.x) * progress,
					y: start.y + (end.y - start.y) * progress
				};

				ctx.beginPath();
				ctx.moveTo(start.x, start.y);
				ctx.lineTo(currentEnd.x, currentEnd.y);
				ctx.stroke();

				return false; // Animation still running
			}

			// Draw complete line
			const start = positions[startIndex];
			const end = positions[startIndex + 1];
			ctx.beginPath();
			ctx.moveTo(start.x, start.y);
			ctx.lineTo(end.x, end.y);
			ctx.stroke();

			return true; // Animation complete
		}

		function frame(startTime: number) {
			ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

			let allComplete = true;
			for (let i = 0; i < positions.length - 1; i++) {
				const complete = animateLine(i, startTime);
				if (!complete) allComplete = false;
			}

			if (!allComplete) {
				animationFrame = requestAnimationFrame(() => frame(startTime));
			}
		}

		frame(Date.now());
	}

	onMount(() => {
		setTimeout(() => {
            drawAnimatedLinesBetweenAnchors();
        }, 150)
		window.addEventListener('resize', drawAnimatedLinesBetweenAnchors);

		return () => {
			window.removeEventListener('resize', drawAnimatedLinesBetweenAnchors);
			// window.removeEventListener('scroll', drawAnimatedLinesBetweenAnchors);
			// if (animationFrame) cancelAnimationFrame(animationFrame);
		};
	});

</script>

<canvas bind:this={canvasElement} class="lines-canvas"></canvas>
<div id="coding" class="projects-section flexcolumn halign valign" style="flex: 1 1 auto;">
    <div class="projects-list flexcolumn padding4 " style="max-width: 650px;">
        <div class="font-title" style={animate(2)}><h1>My best work</h1> </div>
        <div class="flexcolumn halign hexpand">
            {#each projects as project, n}
                <div class="project-card hexpand padding4 margin-left3" style="max-width: 500px; {animate(n + 3)}">
                    <div class="project-marker" style="width: 1.5rem; height: 1.5rem;">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <div class="marker-inner"></div>
                    </div>
                    <div class="font-subtitle flexcolumn gap3">
                        <div class="flexcolumn">
                            <div class="hexpand flexrow space-between valign"><h1 style="font-size: 1.75em;">{project.name}</h1> <p style="color: var(--accent-color-primary);">{project.date}</p></div>
                            <p class="secondary">{@html project.description}</p>
                        </div>
                        <div class="flexrow gap3">
                            {#each project.langs as lang}
                                <p class={lang}>{lang}</p>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .lines-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
        z-index: 0;
    }

    .project-marker {
        background-color: white;
        border-radius: 100px;
        position: absolute;
        transform: translate(-150%, 5px);
    }

    @media screen and (max-width: 768px) {
        /* .projects-section {
            height: 100vh !important;
        } */
         .font-title {
            margin-left: 3px;
            font-size: 1.5rem;
         }
        .center-mobile {
            align-items: center !important;
        }
    }

    :global(html) {
        scroll-behavior: smooth;
    }
</style>