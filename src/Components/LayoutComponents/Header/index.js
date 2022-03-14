import React from "react";
import LogoutButton from "../../LogoutButton";
import Toggle from "../../DarkMode/toggle";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../LoginButton";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="bg-mainBlue dark:bg-darkMainBlack p-4 fixed left-0 right-0 z-50">
      <div className="flex justify-end md:flex lg:flex md:justify-between lg:justify-between items-center">
        <div className="pr-[77px]">
          <img
            alt="Logo Bossa Nova"
            src="logo-01.png"
            className="w-[40px] h-[40px] md:w-[50px] lg:w-[50px] md:h-[50px] lg:h-[50px]"
          />
          {/* Div image */}
        </div>
        <div className="flex justify-end">
          {isAuthenticated ? (
            <>
              <LogoutButton
                className=" text-white font-bold mx-2 hover:text-darkBlue dark:hover:text-darkBlue"
                text="Sign out"
              />
              <Toggle />
            </>
          ) : (
            <>
              <LoginButton text={"Sign in"} btn="text-white font-bold mx-2" />
              <Toggle />
            </>
          )}
          {/* Div toggle and button */}
        </div>

        {/* Div wrapper big */}
      </div>
    </nav>
  );
}

export default Header;
