/* import { useEffect, useState } from "react"; */
import Header from "../LayoutComponents/Header";
import Sidebar from "../LayoutComponents/Sidebar";
// import Footer from "../LayoutComponents/Footer";
import Hero from "../Hero";
// import "./App.css";

function App() {
  return (
    <div className="bg-blueWhite">
      <Header className="sticky min-h-[12vh]" />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <Hero />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
