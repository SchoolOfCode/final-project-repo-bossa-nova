import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar2Minus } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../LogoutButton";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useAuth0();
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
        className={`flex flex-col flex-grow w-[70vw] sm:w-[60vw] h-[90vh] rounded-b-xl bg-lightBlue p-6 pl-10 fixed ease-in-out duration-300 md:hidden z-30 
        text-mainBlue border-mainBlue text-mobileSidebar ${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <nav className="pt-20 flex flex-col gap-8">
          <button className="flex space-x-3 items-baseline  hover:text-coral">
            <AiOutlineHome />
            <Link to="/home" onClick={() => setShowSidebar(!showSidebar)}>
              HOME
            </Link>
          </button>
          <hr className="border-t-[1px] " />
          <button className="flex space-x-3 items-baseline hover:text-coral">
            <BsCalendar2Minus />
            <Link to="/resources" onClick={() => setShowSidebar(!showSidebar)}>
              Resources
            </Link>
          </button>
          <hr className="border-t-[1px] " />
          {/* <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex space-x-3 items-baseline hover:text-coral"
          >
            <IoPersonOutline />
            {user && user.name}
          </button> */}
          <div className="flex space-x-3 items-baseline hover:text-coral">
            <BiLogIn />
            <LogoutButton text="Sign out" />
          </div>
        </nav>
      </div>

      {/* desktop sidebar */}
      <div className="hidden md:flex md:flex-col md:flex-grow w-[25vw] shadow-sm rounded-b-2xl bg-lightBlue px-6 pl-10 text-mainBlue text-desktopSidebar border-mainBlue ml-4 mr-4 mb-4 h-[90vh]">
        <nav className="flex flex-col gap-8 pt-20">
          <button className="flex space-x-3 items-baseline hover:text-coral">
            <AiOutlineHome />
            <Link to="/home" name="home-link">
              Home
            </Link>
          </button>
          <hr className="border-t-[1px] " />
          <button
            name="resources-link"
            className="flex space-x-3 items-baseline hover:text-coral"
          >
            <BsCalendar2Minus />
            <Link to="/resources">Resources</Link>
          </button>
          <hr className="border-t-[1px] " />
          {/*   <button className="flex space-x-3 items-baseline hover:text-coral truncate">
            <IoPersonOutline />
            {user && user.name}
          </button> */}
          <div className="flex space-x-3 items-baseline hover:text-coral">
            <BiLogIn />
            <LogoutButton text="Sign out" />
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
