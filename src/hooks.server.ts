import { themes } from '$lib';

let theme: string | undefined

export const handle = async({event, resolve}) => {
    const response = await resolve(event, {
      transformPageChunk: ({html}) => {
        let currentTheme = event.cookies.get("theme");
        let useRandom = event.cookies.get("useRandomTheme");

        if (useRandom === "true") {
            theme = themes[Math.floor(Math.random()*13)]
        } else {
            theme = currentTheme
        }

        return html.replace(`data-theme=""`, `data-theme="${theme}"`);
      }
    });
    return response;
}