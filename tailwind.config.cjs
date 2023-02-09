/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  "tailwindCSS.includeLanguages": {
    javascript: "javascript",
    html: "HTML",
  },
  "editor.quickSuggestions": {
    strings: true,
  },
  theme: {
    extend: {
      colors: {
        // Dark Mode Elements
        DarkBlue: "hsl(209, 23%, 22%)",
        // Dark Mode Background
        DVeryDarkBlue: "hsl(207, 26%, 17%)",
        // Light Mode Text
        LVeryDarkBlue: "hsl(200, 15%, 8%)",
        // LightModeInput
        DarkGray: "hsl(0, 0%, 52%)",
        // LightModeBackground
        VeryLightGray: "hsl(0, 0%, 98%)",
        //Dark Mode Text & Light Mode Elements
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Nunito: "'Nunito Sans', 'sans-serif'",
      },
    },
  },
  plugins: [],
};

// # Front-end Style Guide

// ## Layout

// The designs were created to the following widths:

// - Mobile: 375px
// - Desktop: 1440px

// ## Colors

// ### Neutral

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

// ## Typography

// ### Body Copy

// - Homepage Items: 14px
// - Detail Page: 16px

// ### Fonts

// - Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
// - Weights: 300, 600, 800

// ## Icons

// For the icons, you can use a font icon library. Don't worry if the icons that you choose don't look exactly like they do on the design.

// Some suggestions can be found below:

// - [Font Awesome](https://fontawesome.com)
// - [IcoMoon](https://icomoon.io)
// - [Ionicons](https://ionicons.com)
