import Header from "../LayoutComponents/Header";
import Sidebar from "../LayoutComponents/Sidebar";
import Hero from "../Hero";
import React from "react";
import { ThemeProvider } from "../DarkMode/themeContext";
import { transitions, positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";

export const options = {
  position: positions.TOP_LEFT,
  timeout: 4000,
  transition: transitions.SCALE,
};

function App() {
  return (
    <ThemeProvider>
      <Provider template={AlertMUITemplate} {...options}>
        <div className="bg-blueWhite dark:bg-darkBg">
          <Header className="sticky min-h-[12vh]" />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <Hero />
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
