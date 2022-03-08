import React from "react";
import LogoutButton from "../../LogoutButton";
import "../../../index.css";
import { IoPersonOutline } from "react-icons/io5";

import LoginButton from "../../LoginButton";
import Profile from "../../Profile/index";
import { Link, useNavigate } from "react-router-dom";

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
