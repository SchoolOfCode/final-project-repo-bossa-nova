import React from "react";
// import { css } from "styled-components";
// import styles from "./HeroContainer.module.css";

export default function HeroContainer({ children, title }) {
  return (
    <div>
      <div className="bg-mainBlue text-blueWhite text-2xl p-4 mt-4 mx-8 rounded-2xl">
        {title}
      </div>
      <main className=" bg-white shadow-lg rounded-2xl p-5 mb-4 mx-4">
        {children}
      </main>
    </div>
  );
}
