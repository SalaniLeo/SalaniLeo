const themes = [
  "dark",
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
  let currentTheme = event.cookies.get("theme");
  let useRandom = event.cookies.get("useRandomTheme");

  // Ensure cookies are properly handled
  if (!themes.includes(currentTheme)) {
      currentTheme = themes[0];  // Default theme if currentTheme is invalid or undefined
  }

  // Determine theme based on useRandom cookie
  let theme;
  if (useRandom === "true") {
      const randomIndex = Math.floor(Math.random() * themes.length);
      console.log("Random index:", randomIndex);  // Debug log
      theme = themes[randomIndex];
      console.log("Selected random theme:", theme);  // Debug log
  } else {
      theme = currentTheme;
  }

  // Debug log for final theme
  console.log("Final theme to apply:", theme);

  const response = await resolve(event, {
      transformPageChunk: ({ html }) => {
          // Ensure theme is defined
          if (!theme) {
              theme = themes[0];  // Fallback to default theme
          }
          return html.replace(`data-theme=""`, `data-theme="${theme}"`);
      }
  });

  return response;
};
