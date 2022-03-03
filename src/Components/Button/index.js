import React from "react";
import "../../index.css";

export default function Button({ text, handleClick, btn }) {
  return (
    <button className={btn} onClick={handleClick}>
      {text}
    </button>
  );
}
