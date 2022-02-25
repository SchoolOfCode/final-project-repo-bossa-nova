module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/Components/**/*.{html,js}",
    "./src/Pages/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./src/Components/Button/index.js",
    "./src/Components/LayoutComponents/Header/index.js",
    "./public/index.html",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    colors: {
      beige: "#F4DFCC",
      coral: "#FA9583",
      lightBlue: "#D6EAF8",
      mainBlue: "#21618C",
      blueWhite: "#EBF5FB",
      blue: "#85C1E9",
      grey: "#7E7979",
      black: "#0B0D17",
      aqua: "#A2D9CE",
    },

    fontFamily: {
      //font-
      lato: ["Lato", "sans-serif"],
      shizuru: ["Shizuru", "cursive"],
    },

    spacing: {
      //pg-
      sm: "1em",
      md: "2em",
      lg: "3em",
    },

    borderRadius: {
      //rounded-
      rounded5: "5px",
      rounded8: "8px",
      rounded15: "15px",
    },

    boxShadow: {
      //shadow-
      sm: "0 4px 4px 0px rgba(0 0 0 / 0.25)",
    },

    extend: {},
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
