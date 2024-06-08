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

let theme;

export const handle = async({event, resolve}) => {
    const response = await resolve(event, {
      transformPageChunk: ({html}) => {
        let currentTheme = event.cookies.get("theme");
        let useRandom = event.cookies.get("useRandomTheme");

        if (useRandom === "true") {
            theme = "ocean"
        } else {
            theme = currentTheme
        }

        return html.replace(`data-theme=""`, `data-theme="${theme}"`);
      }
    });
    return response;
}