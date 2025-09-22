import { writable } from "svelte/store";

export function scrollIntoView({ target }) {
    let el = document.querySelector(target.getAttribute('href'));

    const offsetTop = el.getBoundingClientRect().top + window.scrollY - 75;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

export const enableScroll = writable(true)