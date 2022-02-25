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

    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        shizuru: ["Shizuru", "cursive"],
      },

      spacing: {
        sm: "1em",
        md: "2em",
        lg: "3em",
      },

      borderRadius: {
        rounded5: "5px",
        rounded8: "8px",
        rounded15: "15px",
      },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
