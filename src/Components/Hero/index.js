import React from "react";
import styles from "./Hero.module.css";
import HeroContainer from "../LayoutComponents/HeroContainer";

function Hero() {
  return (
    <div className={styles.Hero}>
      <HeroContainer />
    </div>
  );
}

export default Hero;
