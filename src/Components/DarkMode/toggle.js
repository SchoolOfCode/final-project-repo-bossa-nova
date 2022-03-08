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
          className="bg-white p-2 text-lg rounded-full cursor-pointer "
        >
          <BsFillSunFill />
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=" bg-white p-2 text-lg rounded-full cursor-pointer "
        >
          <BsFillMoonFill />
        </button>
      )}
    </div>
  );
};

export default Toggle;
