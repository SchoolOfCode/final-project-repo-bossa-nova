/* import { useEffect, useState } from "react"; */
import Header from "../LayoutComponents/Header";
import Sidebar from "../LayoutComponents/Sidebar";
// import Footer from "../LayoutComponents/Footer";
import Hero from "../Hero";
// import "./App.css";
import React, { useState } from "react";

import { ThemeProvider } from "../DarkMode/themeContext";

export const pageWrapper = React.createContext();

function App() {
  const [pageState, setPageState] = useState({
    Name: "Chirag",
    Age: 25,
    Toogle: false,
  });

  return (
    <ThemeProvider>
      <pageWrapper.Provider value={{ pageState, setPageState }}>
        <div className="bg-blueWhite dark:bg-darkBg">
          <Header className="sticky min-h-[12vh]" />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <Hero />
          </div>
          {/* <Footer /> */}
        </div>
      </pageWrapper.Provider>
    </ThemeProvider>
  );
}

export default App;
