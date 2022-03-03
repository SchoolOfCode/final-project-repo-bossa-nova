import React from "react";
import Button from "../../Button";
// import styles from "./Header.module.css";
// import "../../../index.css";

function Header() {
  return (
    <nav className="bg-mainBlue flex justify-end">
      {/* <Button className="hidden" btn="positiveButton" text={"Home"}></Button> */}
      <Button btn="tableNegativeButton" text={"Log Out"}></Button>

      {/* <button className="tableNegativeButton">Log Out</button> */}
    </nav>
  );
}

export default Header;
