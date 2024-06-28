export function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute('href'));
    if (!el) return;

    const offsetTop = el.getBoundingClientRect().top + window.scrollY - 75;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}
