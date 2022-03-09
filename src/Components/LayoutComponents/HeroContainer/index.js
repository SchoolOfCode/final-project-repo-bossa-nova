import React from "react";
// import { css } from "styled-components";
// import styles from "./HeroContainer.module.css";
// import { useContext } from "react";
// import { pageWrapper } from "../../App/App";

export default function HeroContainer({ children, title }) {
  // const { pageState, setPageState } = useContext(pageWrapper);
  // console.log(pageState);

  return (
    <div className="relative flex justify-center">
      <div className="absolute  z-10   bg-mainBlue text-blueWhite dark:bg-darkMainBlack text-mobileHeroHeading md:text-desktopHeroHeading p-5 mt-12 w-[82%] md:w-[86%] rounded-lg">
        {title}
      </div>
      <main className="absolute mt-20 md:mt-[5.5rem] bg-white shadow-lg dark:bg-darkContHero rounded-lg p-5 pt-12 md:pt-16 mb-4 w-[87%] md:w-[90%] text-mobileBody md:text-desktopMain">
        {children}
      </main>
    </div>
  );
}

// header 75% body 83
