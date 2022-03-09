import React from "react";
import { nanoid } from "nanoid";

const SelectFilter = ({ labelText, name, update, options, value }) => {
  return (
    <>
      <label>{labelText}</label>
      <select
        className="styleSelect"
        name={name}
        onChange={update}
        value={value}
      >
        {options.map((o) => (
          <option key={nanoid()} value={o.toLowerCase()}>
            {o}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectFilter;
