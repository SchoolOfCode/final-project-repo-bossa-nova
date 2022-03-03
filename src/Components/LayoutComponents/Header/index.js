import React from "react";
import LogoutButton from "../../LogoutButton";
import "../../../index.css";

function Header() {
  return (
    <nav className="bg-mainBlue flex justify-end">
      <LogoutButton className="tableNegativeButton" text="Log out" />
    </nav>
  );
}

export default Header;
