import React from "react";
import Button from "../../Button";
// import styles from "./Header.module.css";
// import "../../../index.css";

function Header() {
  return (
    <nav className="bg-mainBlue col-auto space-x-0 space-y-0 h-130 shadow-sm">
      <Button btn="positiveButton" text={"Home"}></Button>

      <button className="tableNegativeButton">Log Out</button>
    </nav>
  );
}

export default Header;
