import React, { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegFolder } from "react-icons/fa";
import { BsCalendar2Minus } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../LogoutButton";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user } = useAuth0();
  return (
    <aside>
      {/* buttons */}
      <div className="md:hidden">
        {showSidebar ? (
          <button
            className="flex text-6xl text-black items-center cursor-pointer fixed left-20 bg top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}
      </div>

      {/* mobile sidebar */}
      <div
        className={`flex flex-col flex-grow w-[50vw] rounded-b-xl bg-lightBlue p-6 pl-10 fixed ease-in-out duration-300 md:hidden z-30 
        text-mainBlue border-mainBlue ml-4 mr-4 mb-4 h-[90vh]${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <nav className="p-md flex flex-col gap-8">
          <Link to="/home">Home</Link>
          <button className="flex">
            <BsCalendar2Minus />
            <Link to="/resources">Resources</Link>
          </button>
          <button className="flex">
            <IoPersonOutline />
            {user && user.name}
          </button>
          <button className="flex">
            <BiLogIn />
            Sign Out
          </button>
        </nav>
      </div>

      {/* desktop sidebar */}

      <div className="">
        <div className="hidden md:flex md:flex-col md:flex-grow w-[25vw] shadow-sm rounded-b-2xl bg-lightBlue px-6 pl-10 text-mainBlue border-mainBlue ml-4 mr-4 mb-4 h-[90vh]">
          <nav className="flex flex-col gap-8 pt-20">
            <button className="flex hover:text-coral">
              <Link to="/home">Home</Link>
            </button>
            <hr className="border-t-[1px] " />
            <button className="flex hover:text-coral">
              <BsCalendar2Minus />
              <Link to="/resources">Resources</Link>
            </button>
            <hr className="border-t-[1px] " />
            <button className="flex hover:text-coral">
              <IoPersonOutline />
              {user && user.name}
            </button>
            <button className="flex hover:text-coral">
              <BiLogIn />
              <LogoutButton text="Sign out" />
            </button>
          </nav>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
