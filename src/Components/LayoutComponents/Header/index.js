import React from "react";
import "../../../index.css";
import LogoutButton from "../../LogoutButton";
import { IoPersonOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className="bg-mainBlue dark:bg-darkMainBlack p-4 shadow-sm">
      <div className="flex space-b justify-end items-center">
        <LogoutButton className="text-white font-bold mx-2" text="Logout" />
        <IoPersonOutline className="text-white " />
      </div>
    </nav>
  );
}

export default Header;
