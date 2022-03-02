import React from "react";
// import { css } from "styled-components";
// import styles from "./HeroContainer.module.css";

export default function HeroContainer({ children, title }) {
  return (
    <div>
      <div className="">{title}</div>
      <main className="">{children}</main>
    </div>
  );
}
