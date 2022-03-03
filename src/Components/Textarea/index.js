import React from "react";

const TextArea = ({ labelText, name, value, update }) => {
  return (
    <>
      <label className="styleLabel">{labelText}</label>
      <textarea
        className="styleInput"
        name={name}
        value={value}
        onChange={update}
      ></textarea>
    </>
  );
};

export default TextArea;
