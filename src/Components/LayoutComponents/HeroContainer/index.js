import React from "react";
import { css } from "styled-components";
import styles from "./HeroContainer.module.css";

export default function HeroContainer({ children, title }) {
  return (
    <div>
      <div className={css.heroHeader}>{title}</div>
      <main className={styles.heroWrapper}>{children}</main>
    </div>
  );
}
