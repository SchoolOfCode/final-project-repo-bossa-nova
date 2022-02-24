import React from "react";
import styles from "./HeroContainer.module.css";

export default function HeroContainer() {
  return (
    <main className={styles.heroWrapper}>
      <div className={styles.heroTitle}>Hero Title</div>
      <div className={styles.heroContent}>Hero Content</div>
    </main>
  );
}
