import React, { useContext } from "react";
import "../../../index.css";
import LogoutButton from "../../LogoutButton";
import { IoPersonOutline } from "react-icons/io5";
import { pageWrapper } from "../../App/App";
import { pink } from "@mui/material/colors";

function Header() {
  const { pageState, setPageState } = useContext(pageWrapper);

  return (
    <nav
      className={
        pageState
          ? "bg-mainBlue dark:bg-darkMainBlack p-4 shadow-sm"
          : "bg-coral"
      }
    >
      <div className="flex space-b justify-end items-center">
        <LogoutButton className="text-white font-bold mx-2" text="Logout" />
        <IoPersonOutline className="text-white " />
        <button
          className="text-white"
          onClick={() =>
            setPageState({ ...pageState, Toogle: !pageState.Toogle })
          }
        >
          Toogle Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Header;
