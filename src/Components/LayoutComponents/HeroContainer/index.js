import React from "react";

export default function HeroContainer({ children, title }) {
  return (
    <div className="relative flex justify-center pt-10">
      <div className="absolute  z-10   bg-mainBlue text-blueWhite dark:bg-darkMainBlack text-mobileHeroHeading md:text-desktopHeroHeading py-5 px-5 mt-20 w-[82vw] md:w-[86%] rounded-lg">
        {title}
      </div>
      <main className="absolute mt-24 md:mt-28 bg-white shadow-lg dark:bg-darkContHero rounded-lg p-5 pt-8 md:pt-16 mb-4 w-[87vw] md:w-[90%] text-mobileBody md:text-desktopMain">
        {children}
      </main>
    </div>
  );
}
