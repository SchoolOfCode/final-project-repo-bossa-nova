module.exports = {
  darkMode: "class",

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
      logl: "1110px",
      xl: "1280px",
      "2xl": "1536px",
    },

    colors: {
      // background: bg-
      //font color: text-
      beige: "#F4DFCC",
      coral: "#FA9583",
      lightcoral: "#FFC3B9",
      lightBlue: "#D6EAF8",
      mainBlue: "#21618C",
      blueWhite: "#EBF5FB",
      blue: "#85C1E9",
      grey: "#575353",
      black: "#0B0D17",
      aqua: "#A2D9CE",
      white: "#FFFFFF",
      transparent: "transparent",
      //dark Mode color:
      darkBlue: "#B6E2FF",
      darkContHero: "#353535",
      darkIcon: "#292929",
      darkMainBlack: "#1D1D1D",
      darkSave: "#B2F5E8",
      darkCancel: "#F48175",
      darkBg: "#111111",
      darkBlockHome: "#545353",
      darkTable: "#D5D8DC",
    },

    fontFamily: {
      //font-
      lato: ["Lato", "sans-serif"],
      shizuru: ["Shizuru", "cursive"],
    },

    fontSize: {
      mobileBody: ["12px", "14.4px"],
      mobileButton: ["13px, 15.6px"],
      mobileSidebar: ["17px", "28.8px"],
      mobileHeroHeading: ["18px", "21.6px"],
      desktopMain: ["18px", "21.6px"],
      desktopHeroHeading: ["28px", "43.2px"],
      desktopSidebar: ["20px", "28.8px"],
      loginDesktop: ["96px", "115.2px"],
      loginApplications: ["40px", "52.6px"],
    },

    boxShadow: {
      //shadow-
      esm: "0 2px 2px 0px rgba(0 0 0 / 0.10)",
      sm: "0 4px 4px 0px rgba(0 0 0 / 0.25)",
      lg: "5px 5px 10px 2px rgba(0 0 0 / 0.25)",
    },

    extend: {},
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
