import React from "react";

const TextArea = ({ labelText, name, value, update, maxlength }) => {
  return (
    <>
      <label className="styleLabel">{labelText}</label>
      <textarea
        maxlength={maxlength}
        data-testid="textarea-test"
        className="styleInput"
        name={name}
        value={value}
        onChange={update}
      ></textarea>
    </>
  );
};

export default TextArea;
