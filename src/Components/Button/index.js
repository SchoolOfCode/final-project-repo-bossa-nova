import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, handleClick, type }) {
  let buttonType;
  if (type === "newJobButton") {
    buttonType = styles.newJobButton;
  } else if (type === "positiveButton") {
    buttonType = styles.positiveButton;
  } else if (type === "negativeButton") {
    buttonType = styles.negativeButton;
  } else if (type === "tablePositiveButton") {
    buttonType = styles.tablePositiveButton;
  } else if (type === "tableNegativeButton") {
    buttonType = styles.tableNegativeButton;
  }

  return (
    <button class="bg-black" className={buttonType} onClick={handleClick}>
      {text}
    </button>
  );
}
