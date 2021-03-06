import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar2Minus } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import LogoutButton from "../../LogoutButton";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../LoginButton";
import { BiUser } from "react-icons/bi";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  return (
    <aside>
      {/* buttons */}
      <div className="md:hidden">
        {showSidebar ? (
          <button
            className="fixed z-50 text-desktopHeroHeading text-blueWhite left-4 top-5 text-xl"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <ImCross />
          </button>
        ) : (
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed z-50 text-desktopHeroHeading text-blueWhite left-4 top-4 text-3xl"
          >
            <GiHamburgerMenu />
          </button>
        )}
      </div>

      {/* mobile sidebar */}
      <div
        data-testid="mobile-sidebar"
        className={`flex flex-col flex-grow w-[70vw] sm:w-[60vw] h-[100vh] rounded-b-xl bg-lightBlue dark:bg-darkIcon p-6 pl-10 fixed ease-in-out duration-300 md:hidden z-30 
        text-mainBlue border-mainBlue dark:text-white dark:border-white text-mobileSidebar ${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <nav className="pt-20 flex flex-col gap-8">
          <button className="flex space-x-3 items-baseline  hover:text-coral dark:hover:text-darkCancel">
            <AiOutlineHome />
            <Link to="/home" onClick={() => setShowSidebar(!showSidebar)}>
              HOME
            </Link>
          </button>
          <hr className="border-t-[1px] " />
          <button className="flex space-x-3 items-baseline hover:text-coral dark:hover:text-darkCancel">
            <BsCalendar2Minus />
            <Link to="/resources" onClick={() => setShowSidebar(!showSidebar)}>
              Resources
            </Link>
          </button>
          <hr className="border-t-[1px] " />
          <div className="flex space-x-3 items-baseline ">
            <BiUser />
            <p>{user ? user.name : "User"}</p>
          </div>
          <div className="flex space-x-3 items-baseline hover:text-coral">
            <BiLogIn />
            <LogoutButton text="Sign out" />
          </div>
        </nav>
      </div>

      {/* desktop sidebar */}

      <div
        data-testid="desktop-sidebar"
        className=" hidden md:flex md:flex-col md:flex-grow w-[25vw] shadow-sm rounded-b-2xl bg-lightBlue dark:bg-darkIcon px-6 pl-10 text-mainBlue text-desktopSidebar border-mainBlue dark:text-white dark:border-white ml-4 mr-4 mb-4 h-[98vh] "
      >
        <nav className="flex flex-col gap-8 pt-48 ">
          <button className="flex space-x-3 items-baseline hover:text-coral dark:hover:text-darkCancel">
            <AiOutlineHome />
            <Link to="/home" name="home-link">
              Home
            </Link>
          </button>
          <hr className="border-t-[1px] " />
          <button
            name="resources-link"
            className="flex space-x-3 items-baseline hover:text-coral dark:hover:text-darkCancel"
          >
            <BsCalendar2Minus />
            <Link to="/resources">Resources</Link>
          </button>
          <hr className="border-t-[1px] " />
          <div className="flex space-x-3 items-baseline ">
            <BiUser />
            <p>{user ? user.name : "User"}</p>
          </div>

          {isAuthenticated ? (
            <div className="flex space-x-3 items-baseline hover:text-coral">
              <BiLogIn />
              <LogoutButton text="Sign out" />
            </div>
          ) : (
            <div className="flex space-x-3 items-baseline hover:text-coral">
              <BiLogIn />
              <LoginButton
                btn="flex space-x-3 items-baseline hover:text-coral"
                text={"Sign in"}
              />
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
