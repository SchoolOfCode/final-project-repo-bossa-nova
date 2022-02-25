import React from "react";
import Button from "../../Button";
import styles from "./Header.module.css";
import "../../../index.css";

function Header({ text }) {
  return (
    <nav className={styles.Header}>
      <Button class="blue" text={"Home"}></Button>

      <button>Log Out</button>
    </nav>
  );
}

export default Header;
