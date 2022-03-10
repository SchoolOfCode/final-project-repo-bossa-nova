import React from "react";
import LogoutButton from "../../LogoutButton";
import Toggle from "../../DarkMode/toggle";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../LoginButton";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="bg-mainBlue dark:bg-darkMainBlack p-4 fixed left-0 right-0 z-50">
      <div className="flex space-b justify-end items-center ">
        <div>
          <img
            alt="bossa-nova-logo"
            src="logo-01.png"
            className="w-[40px] h-[40px]"
          />
        </div>
        {isAuthenticated ? (
          <>
            <LogoutButton
              className="text-white font-bold mx-2"
              text="Log out"
            />
            <Toggle />
          </>
        ) : (
          <>
            <LoginButton text={"Sign in"} btn="text-white font-bold mx-2" />
            <Toggle />
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
