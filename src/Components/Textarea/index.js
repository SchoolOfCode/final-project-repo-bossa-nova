import React from "react";

const TextArea = ({ labelText, name, value, update }) => {
  return (
    <>
      <label>{labelText}</label>
      <textarea name={name} value={value} onChange={update}></textarea>
    </>
  );
};

export default TextArea;
