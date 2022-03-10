import React from "react";
// import { css } from "styled-components";
// import styles from "./HeroContainer.module.css";
import { useContext } from "react";
import { pageWrapper } from "../../App/App";

export default function HeroContainer({ children, title }) {
  const { pageState, setPageState } = useContext(pageWrapper);
  console.log(pageState);

  return (
    <div className="relative flex justify-center">
      <div className="absolute  z-10   bg-mainBlue text-blueWhite dark:bg-darkMainBlack text-mobileHeroHeading md:text-desktopHeroHeading py-2 px-5 mt-20 w-[82vw] md:w-[86%] rounded-lg">
        {title}
      </div>
      <main className="absolute mt-24 md:mt-28 bg-white shadow-lg dark:bg-darkContHero rounded-lg p-5 pt-8 md:pt-16 mb-4 w-[87vw] md:w-[90%] text-mobileBody md:text-desktopMain">
        {children}
      </main>
    </div>
  );
}

// header 75% body 83
