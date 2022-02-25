import React from "react";
import styles from "./Button.module.css";
import "../../index.css";

export default function Button({ text, handleClick, type, btn }) {
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
    <button class={btn} className={buttonType} onClick={handleClick}>
      {text}
    </button>
  );
}
