let animate = true;

setTimeout(() => {
    animate = false;
}, 4000);

export { animate }

function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute('href'));
    if (!el) return;
el.scrollIntoView({
  behavior: 'smooth'
});
}

export { scrollIntoView }