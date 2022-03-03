import React from "react";

export default function Input({
  labelText,
  type,
  name,
  value,
  update,
  styleInput,
}) {
  return (
    <>
      <label className="styleLabel">{labelText}</label>
      <input
        className="styleInput"
        type={type}
        name={name}
        value={value}
        onChange={update}
      />
    </>
  );
}
