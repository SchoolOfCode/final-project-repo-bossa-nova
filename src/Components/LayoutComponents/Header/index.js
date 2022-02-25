import React from "react";
import Button from "../../Button";
import styles from "./Header.module.css";
import "../../../index.css";

function Header() {
  return (
    <nav className={styles.Header}>
      <Button btn="bg-coral font-lato" text={"Home"}></Button>

      <button class="bg-coral font-shizuru">Log Out</button>
    </nav>
  );
}

export default Header;
