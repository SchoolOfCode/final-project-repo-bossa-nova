import React from "react";
import styles from "./HeroContainer.module.css";

export default function HeroContainer({ children }) {
  return <main className={styles.heroWrapper}>{children}</main>;
}
