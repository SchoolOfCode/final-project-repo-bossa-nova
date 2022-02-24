import React from "react";
import styles from "./Hero.module.css";
// import HeroContainer from "../LayoutComponents/HeroContainer";
// import { Routes, Route } from "react-router-dom";
// import Login from "../../Pages/Login";
// import Home from "../../Pages/Home";
// import AddNew from "../../Pages/AddNew";
// import Update from "../../Pages/Update";
// import Resources from "../../Pages/Resources";

// *******************
// plan to move hero container in the individual pages
// *****************

function Hero() {
  return (
    <div className={styles.Hero}>
      {/* <HeroContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-new" element={<AddNew />} />
          <Route path="/update" element={<Update />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </HeroContainer> */}
    </div>
  );
}

export default Hero;
