<script lang="ts">
  import { preventDefault, handlers } from 'svelte/legacy';

  import { enableScroll } from "$lib";

  let outerWidth = $state(0);
  
  let innerWidth = $state(0);
  
  let outerHeight = $state(0);
  
  let innerHeight = $state(0);
  
  let pageY : any = $state();

  import { scrollIntoView } from "$lib";
	import ThemeChanger from "./themeChanger.svelte";
  let { showdocuments = $bindable() } = $props()

  let open = false;
  let opened = $state(false);

  function openNavMenu() {
    if (window.pageYOffset < window.innerHeight) {
      window.scrollTo({ top: window.innerHeight + 75 });
    }
    open = true;
    changeValues();
  }

  function changeValues() {
    if (open) {
      opened = !opened;
      scrollable = !scrollable;
      enableScroll.set(!$enableScroll);
      clickedAtLeastOnce = true;
      // open = false;
    }
  }

  let scrollable = $state(true);
  let clickedAtLeastOnce = $state(false);

  const wheel = (node: any, options: any) => {
    let { scrollable } = options;

    const handler = (e: any) => {
      if (!scrollable) e.preventDefault();
    };

    node.addEventListener("wheel", handler, { passive: false });

    return {
      update(options: any) {
        scrollable = options.scrollable;
      },
      destroy() {
        node.removeEventListener("wheel", handler, { passive: false });
      },
    };
  };
</script>

<svelte:window
  use:wheel={{ scrollable }}
  bind:scrollY={pageY}
  bind:innerWidth
  bind:outerWidth
  bind:innerHeight
  bind:outerHeight
/>

<nav class:non-expanded={pageY <= innerHeight}>
  <div class="left">
    <!-- <div class="open"></div> -->
    <div
      class:open={opened && clickedAtLeastOnce}
      class:closed={!opened && clickedAtLeastOnce}
      class="mobile"
    >
      <!-- <a
        on:click={changeValues}
        class="loadanim link"
        style="animation: loadText 1s 0s forwards;"
        href="#work"
        on:click|preventDefault={scrollIntoView}>Home</a
      > -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div class="links">
        <a
        onclick={handlers(changeValues, preventDefault(scrollIntoView))}
        class="loadanim link"
        style="animation: loadText 1s 0s forwards;"
        href="#experience">Experience</a
      >
      <a
        onclick={handlers(changeValues, preventDefault(scrollIntoView))}
        class="loadanim link"
        style="animation: loadText 1s 0.1s forwards;"
        href="#school">School</a
      >
      <a
        onclick={handlers(changeValues, preventDefault(scrollIntoView))}
        class="loadanim link"
        style="animation: loadText 1s 0.2s forwards;"
        href="#projectslink">Projects</a
      >
      <a
        onclick={handlers(changeValues, preventDefault(scrollIntoView))}
        class="loadanim link"
        style="animation: loadText 1s 0.3s forwards;"
        href="#footer">Contact</a
      >
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <p
        onclick={() => {showdocuments = !showdocuments}}
        class="loadanim link"
        style="animation: loadText 1s 0.4s forwards; cursor: pointer;"
        >Documents</p
      >
    </div>
    </div>
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button
      class="show"
      id="btnmenu"
      style="animation: loadText 1s 0.025s forwards;"
      onclick={openNavMenu}><i class="fa-solid fa-bars"></i></button
    >
  </div>
  <!-- svelte-ignore a11y_consider_explicit_label -->
  <div class="right">
    <div id="contacts">
      <a
        class="loadanim contact"
        style="animation: loadText 1s 0.20s forwards;"
        id="instagram"
        href="https://www.instagram.com/leonardo.salanii/"
        ><i style="transform: translateY(-25%);" class="fa-brands fa-instagram"
        ></i></a
      >
      <a
        class="loadanim contact"
        style="animation: loadText 1s 0.225s forwards;"
        id="email"
        href="mailto:leonardo@salanileo.dev"
        ><i style="transform: translateY(-25%);" class="fa-solid fa-envelope"
        ></i></a
      >
      <a
        class="loadanim contact"
        style="animation: loadText 1s 0.25s forwards;"
        id="github"
        href="https://github.com/SalaniLeo"
        ><i style="transform: translateY(-25%);" class="fa-brands fa-github"
        ></i></a
      >
      <a
        class="loadanim contact"
        style="animation: loadText 1s 0.275s forwards;"
        id="linkedin"
        href="https://www.linkedin.com/in/leonardo-salani/"
        ><i style="transform: translateY(-25%);" class="fa-brands fa-linkedin"
        ></i></a
      >
    </div>
    <ThemeChanger></ThemeChanger>
    <!-- <a class="loadanim link" style="animation: loadText 1s 0.3s forwards;" href="/about">About</a> -->
  </div>
</nav>

<style>
  .non-expanded {
    width: 95%;
    transform: translateX(2.5%);
    border-radius: 1rem;
    border: 2px solid var(--border-color);
  }

  * {
    text-decoration: none;
  }

  nav {
    font-size: 1.5rem;
    font-family: "Metrophobic", sans-serif;
    background-color: var(--background-blurry);
    backdrop-filter: blur(10px);
    position: absolute;
    height: 75px;
    z-index: 2;
    display: flex;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: calc(100%);
    border-radius: unset;
    border: unset;
    border-bottom: 2px solid var(--border-color);
  }
  nav > .left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 5rem;
    flex-grow: 1;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1.5rem;
  }
  nav > .right {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 1rem;
    padding-right: 5rem;
    flex-grow: 1;
    /* margin-right: 2rem; */
  }
  nav .show {
    opacity: 0;
    display: none;
  }
  nav a:hover {
    animation: liftText forwards;
  }
  nav * {
    transition-duration: 0s !important;
  }
  #contacts {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 2rem;
    margin-right: 1rem;
  }
  #contacts > * {
    max-height: 20px;
    text-decoration: none;    width: calc(100% - 4px);

  }
  .contact {
    font-size: 1.5rem;
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
      opacity: 1;
      /* text-shadow: black 3px 3px 3px; */
    }
  }
  @keyframes openMenu {
    from {
    }
    to {
      transform: translateX(0px);
    }
  }
  @keyframes closeMenu {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-100%);
    }
  }
  @media only screen and (max-width: 860px) {
    nav {
      width: 100vw !important;
      transform: unset !important;
      border-radius: 0 !important;
      border-right: unset !important;
      border-left: unset !important;
      border-bottom: 2px solid var(--border-color);

    }
    nav div {
      font-size: 1rem;
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      margin-right: 0px !important;
    }
    nav .show {
      display: unset;
    }
    #btnmenu {
      height: 50%;
      background-color: transparent;
      border: none;
      scale: 200%;
    }
    .mobile {
      top: 0;
      position: fixed;
      padding: 0 !important;
      height: 100vh;
      width: 100vw;
      text-align: left;
      justify-content: left;
      align-items: start;
      background-color: var(--background-terthiary-color);
      z-index: 0;
      backdrop-filter: blur(10px);
      left: 0px;
      transform: translateX(-100%);
      display: flex;
      gap: 1rem;
      flex-direction: column;
      font-size: 2rem;
    }
    .links {
      padding: 1rem !important;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      text-align: left;
      align-items: start;
      justify-content: start;
      padding-top: 75px !important;
    }
    .open {
      opacity: 1 !important;
      transform: translateX(-100%);
      animation: openMenu 0.5s forwards;
    }
    .closed {
      animation: closeMenu 0.5s forwards;
    }
  }
</style>
