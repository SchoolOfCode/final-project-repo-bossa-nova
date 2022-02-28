import React from "react";
const inputStyle = { outline: "solid" };

export default function Input({ labelText, type, name, value, update }) {
  return (
    <label>
      {labelText}
      <input
        style={inputStyle}
        type={type}
        name={name}
        value={value}
        onChange={update}
      />
    </label>
  );
}
