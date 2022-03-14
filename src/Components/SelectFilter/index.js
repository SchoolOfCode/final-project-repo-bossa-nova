import React from "react";
import { nanoid } from "nanoid";

const SelectFilter = ({ labelText, name, update, options, value }) => {
  return (
    <>
      <label className="text-mainBlue font-semibold dark:text-white pr-2">
        {labelText}
      </label>
      <select
        className="styleSelect rounded-md w-28 "
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
