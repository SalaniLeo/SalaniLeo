<script>
  import "../app.css";
  import Background from "$lib/background.svelte";
  import Modal from "../lib/Modal.svelte";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import { onMount } from "svelte";
  import { getCookie, setCookie, themes } from "$lib";

  export let color = "white";
  export let mixBlendMode = "difference";
  export let height = 10;
  export let width = 10;
  export let radius = -50;
  export let shape = "circle(50% at 50% 50%)";
  export let trans = "all 0s cubic-bezier(0.28, 0.8, 0.36, 1)";

  let x = -100;
  let y = -100;

  const cx = height / 2;
  const cy = width / 2;

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  onMount(() => {
    if (!isMobile()) {
      const initCursor = () => {
        document.addEventListener("mousemove", (e) => {
          x = e.clientX;
          y = e.clientY;
        });
        const hoverables = document.querySelectorAll(".hover, .link, .button");
        hoverables.forEach((hoverable) => {
          hoverable.addEventListener("mouseenter", () => {
            shape = "polygon(0% 0%, 10% 90%, 28% 55%, 70% 50%)";
            height += 10;
            width += 10;
            trans = "all 0s cubic-bezier(0.28, 0.8, 0.36, 1)";
            document.body.style.cursor = "none";
          });
          hoverable.addEventListener("mouseleave", () => {
            trans = " all 0s cubic-bezier(0.28, 0.8, 0.36, 1)";
            shape = "circle(50% at 50% 50%)";
            height -= 10;
            width -= 10;
          });
        });
      };

      initCursor();
    }
  });
  let showModal = false;
  let currentTheme = "";
  onMount(() => {
    if (getCookie("theme") != "") {
      currentTheme = getCookie("theme");
      document.documentElement.dataset.theme == currentTheme;
      setTheme(currentTheme, false);
    }
  });

  const setTheme = (theme, save) => {
    document.documentElement.dataset.theme = theme;
    currentTheme = theme;
    console.log(theme);
    if (save) setCookie("theme", theme);
  };
</script>

<div class="topbar">
  <div class="btncontainer">
    <a href="/" class="button hover">home</a>

    <div class="dropdown button hover">
      <span>subdomains</span>
      <div class="dropdown-content">
        <a href="https://home.salanileo.dev">homepage</a>
        <a href="https://weather.salanileo.dev">weather</a>
      </div>
    </div>
  </div>

  <div class="btncontainer">
    <a href="/about" class="button hover">about</a>
    <div class="dropdown button hover">
      <span>themes</span>
      <div class="dropdown-content" style="transform: translate(-6px, 6px)">
        {#each themes as theme, i}
          <a href="#" on:click={() => setTheme(theme, true)}>{theme}</a><br />
        {/each}
      </div>
    </div>
    <!-- <button
      id="settingsBtn"
      class="button hover"
      style="padding: 7px; !important"
      on:click={() => (showModal = true)}
    >
      <i class="fa-solid fa-gear"></i>
    </button> -->
  </div>
</div>

<!-- <Modal bind:showModal>
  <h2 slot="header">
    Settings <i
      class="fa-solid fa-circle"
      style="scale: 40%; top: 3px; position: relative;"
    ></i>
    <i
      class="fa-solid fa-arrow-turn-up"
      style="rotate: 90deg; top: 5px; position: relative; margin-left: 5px; margin-right: 5px"
    ></i> to apply
  </h2>
  <div id="grid">
    <div class="settingsGrid"></div>
    <div class="settingsGrid"></div>
  </div>
</Modal> -->

<div
  class="custom-cursor"
  style="left: {x - cx}px; 
  top: {y - cy}px;
  --width:{width}px;
  --height:{height}px;
  --border-radius:{radius};
  --mix-blend-mode: {mixBlendMode};
  --background-color: {color};
  --shape: {shape};
  --trans: {trans}"
/>

<Background />
<slot />

<style>
  .custom-cursor {
    --background-color: "black";
    --mix-blend-mode: "difference";
    --width: 10;
    --height: 10;
    --shape: circle(50% at 50% 50%);
    --trans: all 0s cubic-bezier(0.28, 0.8, 0.36, 1);
    background-color: var(--background-color);
    mix-blend-mode: var(--mix-blend-mode);
    width: var(--width);
    height: var(--height);
    position: fixed;
    pointer-events: none;
    z-index: 99999;
    clip-path: var(--shape);
    /* Customize your cursor styles here */
    transition: var(--trans);
    cursor: none;
  }

  .topbar {
    position: fixed;
    top: 0px;
    backdrop-filter: blur(5px);
    max-height: 55px;
    background-color: var(--topbar-color);
    z-index: 3;
    padding: 10px;
    width: 100%;
    border-bottom: var(--border);
    box-sizing: border-box;

    /* animation-name: load;
    animation-duration: 1s;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
    transform: translateY(-100%); */

    display: grid;
    grid-template-columns: 1fr 0fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .btncontainer {
    height: min-content;
    width: max-content;
    display: flex;
    gap: 10px;
  }
  @keyframes load {
    100% {
      transform: translateY(0%);
    }
  }
</style>
