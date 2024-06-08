// @ts-nocheck
import Cookies from 'js-cookie';
import { writable } from 'svelte/store';

// Initialize the theme settings from cookies
const initialRandomTheme = Cookies.get('useRandomTheme') === 'true';
const initialTheme = Cookies.get('theme');

export const randomTheme = writable(initialRandomTheme);
export const currentTheme = writable(initialTheme);

const themes = ["dark" ,
    "summer", 
    "winter", 
    "light", 
    "spring", 
    "fall", 
    "candycane", 
    "choco", 
    "ocean", 
    "retro", 
    "galaxy", 
    "sunset", 
    "forest"
]

randomTheme.subscribe(value => {
  Cookies.set('useRandomTheme', value, { expires: 365 });
});

export function setRandomTheme() {
  setTheme(themes[Math.floor(Math.random()*13)], false)
}

export function toggleRandomTheme() {
  randomTheme.update(value => !value);

  if(Cookies.get('useRandomTheme') === 'true') {
    setRandomTheme()
  } else {
    setTheme(Cookies.get('theme'), true)
  }
}

export function setCookie(name, value) {
  Cookies.set(name, value, { expires: 365 });
}

export function getCookie(name) {
  return Cookies.get(name);
}

export function setTheme(theme, save = true) {
  document.documentElement.dataset.theme = theme;
  currentTheme.set(theme);
  if (save) setCookie('theme', theme);
}

export function getTheme() {
  return getCookie('theme');
}

export function getThemeFromCookie(cookie) {
  if (typeof cookie === 'string') {
    const match = cookie.match(new RegExp('(^| )theme=([^;]+)'));
    if (match) {
      return match[2];
    }
  } else if (typeof document !== 'undefined') {
    const match = document.cookie.match(new RegExp('(^| )theme=([^;]+)'));
    if (match) {
      return match[2];
    }
  }
  return 'light';
}
