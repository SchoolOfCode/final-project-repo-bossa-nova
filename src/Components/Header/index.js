import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <nav className={styles.Header}>
      <button>home button</button>

      <button>Log Out</button>

    </nav>
  );
}

export default Header;
