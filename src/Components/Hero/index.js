import React from "react";
// import styles from "./Hero.module.css";
// import HeroContainer from "../LayoutComponents/HeroContainer";
import { Routes, Route } from "react-router-dom";
import Login from "../../Pages/Login";
import Home from "../../Pages/Home";
import AddNew from "../../Pages/AddNew";
import Update from "../../Pages/Update";
import Resources from "../../Pages/Resources";
import Charts from "../../Pages/Charts";

// *******************
// plan to move hero container in the individual pages
// *****************

function Hero() {
  return (
    <div className="bg-blueWhite dark:bg-darkBg flex-grow overflow-y-scroll">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/update/:user_id/:job_id" element={<Update />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </div>
  );
}

export default Hero;
