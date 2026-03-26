<script lang="ts">
    $effect(() => {
        const canvas = document.getElementById("stars") as HTMLCanvasElement;
        if (!canvas) return;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        if (!ctx) return;

        let width: number, height: number;
        const NUM_STARS = 400;
        const DURATION = 10;

        const STAR_COLORS = [
            [255, 255, 255],
            [240, 240, 240],
            [190, 190, 255],
            [252, 255, 201],
            [180, 180, 180],
        ];

        let stars: {x: number, y: number, r: number, c: number[], phase: number, speed: number}[] = [];
        let startTime = performance.now();

        function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        generateStars();
        }

        function generateStars() {
            // clear existing stars to avoid accumulation on resize
            stars = [];
            for (let i = 0; i < NUM_STARS; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    r: Math.random() * 2,
                    c: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
                    phase: Math.random() * Math.PI * 2,
                    speed: Math.random() * 0.99 + 0.01
                });
            }
        }

        function draw() {
        const now = performance.now();
        const t = ((now - startTime) / 1000) % DURATION;

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);

        stars.forEach(star => {
            let nBlinks = Math.floor(star.speed * (DURATION / 5));
            if (nBlinks === 0) nBlinks = 1;

            const angle = (t / DURATION) * (nBlinks * 2 * Math.PI) + star.phase;
            const brightness = (Math.sin(angle) + 1) / 2;

            const r = Math.floor(star.c[0] * brightness);
            const g = Math.floor(star.c[1] * brightness);
            const b = Math.floor(star.c[2] * brightness);

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fill();
        });

        requestAnimationFrame(draw);
        }

        window.addEventListener("resize", resize);

        resize();
        draw();
    })
</script>

<canvas id="stars"></canvas>

<style>
    :global(html, body) {
        height: 100%;
        margin: 0;
    }
    canvas#stars {
        position: fixed;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
    }
</style>