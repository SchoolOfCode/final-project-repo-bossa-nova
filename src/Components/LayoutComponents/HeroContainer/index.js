import React from "react";
// import { css } from "styled-components";
// import styles from "./HeroContainer.module.css";

export default function HeroContainer({ children, title }) {
  return (
    <div>
      <div className="bg-mainBlue text-blueWhite text-s24 p-sm mt-sm mx-md rounded-rounded15">
        {title}
      </div>
      <main className=" bg-white border-2 border-mainBlue rounded-rounded15 p-md mb-sm mx-sm">
        {children}
      </main>
    </div>
  );
}
