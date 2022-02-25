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
    extend: {},
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
