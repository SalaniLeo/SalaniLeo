// @ts-ignore
import Cookies from 'js-cookie'
// @ts-ignore
let currentTheme = "light";

// @ts-ignore
function setCookie(name, args){
	Cookies.set(name, args, { expires: 365 })
}

// @ts-ignore
function getCookie(name){
	return Cookies.get(name)
}

// @ts-ignore
const setTheme = (theme, save) => {
    document.documentElement.dataset.theme = theme;
    currentTheme = theme;
    if (save) setCookie("theme", theme);
};

// @ts-ignore
const getSysTheme = (save) => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setTheme("dark", save);
    } else {
      setTheme("light", save);
    }
};

export { setCookie, getCookie, getSysTheme, setTheme }