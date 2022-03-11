import React from "react";
import { ThemeContext } from "./themeContext";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-white hover:focus:ring hover:bg-darkBlue p-2 text-lg rounded-full cursor-pointer duration-300 ease-in-out "
        >
          <BsFillSunFill />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=" bg-white text-mainBlue hover:bg-blueWhite hover:focus:ring p-2 text-lg rounded-full cursor-pointer duration-300 ease-in-out "
        >
          <BsFillMoonFill />
        </button>
      )}
    </div>
  );
};

export default Toggle;
