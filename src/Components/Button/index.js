import React from "react";
import css from "./Button.module.css";

const Button = ({ type }) => {
  let buttonType;
  if (type === "editButton") {
    buttonType = css.editButton;
  } else if (type === "deleteButton") {
    buttonType = css.deleteButton;
  } else if (type === "addJobButton") {
    buttonType = css.addJobButton;
  } else if (type === "cancelButton") {
    buttonType = css.cancelButton;
  } else if (type === "saveButton") {
    buttonType = css.saveButton;
  }

  return <button className={buttonType}>Click me</button>;
};

export default Button;
