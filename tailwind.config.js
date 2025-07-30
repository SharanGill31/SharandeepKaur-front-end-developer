export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            pacifico: ["Pacifico", "cursive"], //  Pacifico for Theme 3
            sans: ["Inter", "sans-serif"],    // Default sans-serif for Theme 1
            serif: ["Merriweather", "serif"], // Serif for Theme 2
          },
        },
      },
      plugins: [],
    };