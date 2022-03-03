import React, { useState } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegFolder } from "react-icons/fa";
import { BsCalendar2Minus } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { ImCross } from "react-icons/im";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    // <aside className="bg-lightBlue">
    // {/* Mobile sidebar buttons */}
    //   <div className="md:hidden">
    //     {showSidebar ? (
    //       <button
    //         className="flex text-6xl text-black items-center cursor-pointer fixed border-4 border-coral left-10 -top-6 z-50"
    //         onClick={() => setShowSidebar(!showSidebar)}
    //       >
    //         x
    //       </button>
    //     ) : (
    //       <svg
    //         onClick={() => setShowSidebar(!showSidebar)}
    //         className="fixed z-30 border-4 border-coral flex items-center cursor-pointer left-10 -top-6"
    //         fill="#2563EB"
    //         viewBox="0 0 100 80"
    //         width="40"
    //         height="40"
    //       >
    //         <rect width="100" height="10"></rect>
    //         <rect y="30" width="100" height="10"></rect>
    //         <rect y="60" width="100" height="10"></rect>
    //       </svg>
    //     )}
    //   </div>
      
    //   {/* mobile sidebar */}
    //   <div
    //     className={`flex md:hidden rounded-b-xl ease-in-out duration-300 ${
    //       showSidebar ? "-translate-x-0 " : "-translate-x-full"
    //     }`}
    //   >

    //     <nav className="p-md">
    //       <h2>Home</h2>
    //       <hr />
    //       <button className="flex">
    //         <HiOutlineBriefcase />
    //         Applications
    //       </button>
    //       <button className="flex">
    //         <FaRegFolder />
    //         Documents
    //       </button>
    //       <button className="flex">
    //         <BsCalendar2Minus />
    //         <Link to="/resources">Resources</Link>
    //       </button>
    //       <button>
    //         <Link to="/add-new">Add new</Link>
    //       </button>
    //       <hr />
    //       <button className="flex">
    //         <IoPersonOutline />
    //         Cintia Here
    //       </button>
    //       <button className="flex">
    //         <BiLogIn />
    //         Sign Out
    //       </button>
    //       {/* Revisit this component because it has classNames from somewhere 
    //     <ul className="">
    //       <li className="applications">My Applications</li>
    //       <li className="checklist">Document Checklist</li>
    //       <li className="resources">Resources</li>
    //       <li className="next-interviews">Next Interviews</li>
    //     </ul> */}
    //     </nav>
    //   </div>

    //   {/* desktop sidebar */}
    //   <div className="hidden md:flex rounded-b-xl ease-in-out duration-300">
    //     {/* ${showSidebar ? "-translate-x-0" : "-translate-x-full"} */}

        
    //   </div>
    // </aside>

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
        className={`flex flex-col flex-grow w-[50vw] rounded-b-xl bg-lightBlue p-6 pl-10 text-black fixed ease-in-out duration-300 md:hidden ${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-black">
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
            <Link to="/resources">Resources</Link>
          </button>
          <button>
            <Link to="/add-new">Add new</Link>
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
        </nav>
        </h3>
      </div>
      
      {/* desktop sidebar */}
      
      <div
        className="hidden md:flex md:flex-col md:flex-grow w-[25vw] rounded-b-xl bg-coral px-6 pl-10 text-black "
      >
        <h3 className="mt-20 text-4xl font-semibold text-black">
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
            <Link to="/resources">Resources</Link>
          </button>
          <button>
            <Link to="/add-new">Add new</Link>
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
        </nav>
        </h3>
      </div>
    </aside>
  );
}

export default Sidebar;
