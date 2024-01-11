let animate = true;
import Cookies from 'js-cookie'

let theme = (Cookies.get('refreshrate')!=undefined) ? Cookies.get('refreshrate') : 500;

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


let themes = ["Light", "Dark"]

export { scrollIntoView }
export { themes }

function setCookie(name, args){
	Cookies.set(name, args, { expires: 365 })
}

function getCookie(name){
	return Cookies.get(name)
}

export { setCookie }
export { getCookie }