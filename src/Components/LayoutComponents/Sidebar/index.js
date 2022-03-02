import React, { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegFolder } from "react-icons/fa";
import { BsCalendar2Minus } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-lightBlue">
      {showSidebar ? (
        <button
          className="flex text-9xl text-mainBlue items-center cursor-pointer fixed left-10 top-6 z-50"
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

      <nav className="p-md">
        <h2>Home</h2>
        <hr />
        <button className="flex">
          <HiOutlineBriefcase />
          Applications
        </button>
        <button className="flex">
          <FaRegFolder />
          Documents
        </button>
        <button className="flex">
          <BsCalendar2Minus />
          Resources
        </button>
        <hr />
        <button className="flex">
          <IoPersonOutline />
          Cintia Here
        </button>
        <button className="flex">
          <BiLogIn />
          Sign Out
        </button>
        {/* Revisit this component because it has classNames from somewhere 
        <ul className="">
          <li className="applications">My Applications</li>
          <li className="checklist">Document Checklist</li>
          <li className="resources">Resources</li>
          <li className="next-interviews">Next Interviews</li>
        </ul> */}
      </nav>
    </div>
  );
}

export default Sidebar;

{
  /* <div
  className={`top-[12vh] left-0 h-[80vh] w-[50vw] rounded-b-xl bg-blue-600 p-6 pl-10 text-blue-100 fixed ease-in-out duration-300 md:hidden 
        ${showSidebar ? "-translate-x-0 " : "-translate-x-full"}
        
        `}
> */
}
