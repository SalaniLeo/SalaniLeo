<script lang="ts">
  import { enableScroll } from "$lib";

  $: outerWidth = 0;
  $: innerWidth = 0;
  $: outerHeight = 0;
  $: innerHeight = 0;
  let pageY: number;

  import { scrollIntoView } from "$lib";

  let open = false;
  let opened = false;

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

  let scrollable = true;
  let clickedAtLeastOnce = false;

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

<nav>
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
    <div class="links">
        <a
        on:click={changeValues}
        class="loadanim link"
        style="animation: loadText 1s 0s forwards;"
        href="#experience"
        on:click|preventDefault={scrollIntoView}>Experience</a
      >
      <a
        on:click={changeValues}
        class="loadanim link"
        style="animation: loadText 1s 0s forwards;"
        href="#school"
        on:click|preventDefault={scrollIntoView}>School</a
      >
      <a
        on:click={changeValues}
        class="loadanim link"
        style="animation: loadText 1s 0.025s forwards;"
        href="#projectslink"
        on:click|preventDefault={scrollIntoView}>Projects</a
      >
      <a
        on:click={changeValues}
        class="loadanim link"
        style="animation: loadText 1s 0.05s forwards;"
        href="#footer"
        on:click|preventDefault={scrollIntoView}>Contact</a
      >
    </div>
    </div>
    <button
      class="show"
      id="btnmenu"
      style="animation: loadText 1s 0.025s forwards;"
      on:click={openNavMenu}><i class="fa-solid fa-bars"></i></button
    >
  </div>
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
        href="mailto:leonardo07.salani@gmail.com"
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
    <!-- <a class="loadanim link" style="animation: loadText 1s 0.3s forwards;" href="/about">About</a> -->
  </div>
</nav>

<style>
  * {
    color: white;
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
    border-radius: 0.5rem;
    border: 2px solid var(--border-color);
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
    margin-right: 2rem;
    margin-left: 2rem;
  }

  #contacts > * {
    max-height: 20px;
    text-decoration: none;
  }

  .contact {
    font-size: 1.5rem;
  }

  .contact,
  .contact i {
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
      width: 100vw;
      border-radius: 0;
      border: unset;
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
