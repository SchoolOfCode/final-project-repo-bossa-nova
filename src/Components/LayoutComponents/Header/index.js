import React from "react";
import Button from "../../Button";
import styles from "./Header.module.css";
import "../../../index.css";

function Header() {
  return (
    <nav className={styles.Header}>
      <Button btn="positiveButton" text={"Home"}></Button>

      <button class="tableNegativeButton">Log Out</button>
    </nav>
  );
}

export default Header;
