const themes = ["dark",
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
];

export const handle = async ({ event, resolve }) => {
    const currentTheme = event.cookies.get("theme");
    const useRandom = event.cookies.get("useRandomTheme");
    
    let theme = useRandom === "true" ? themes[Math.floor(Math.random() * themes.length)] : currentTheme;

    const response = await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace(`data-theme=""`, `data-theme="${themes[0]}"`);
        }
    });

    return response;
};
