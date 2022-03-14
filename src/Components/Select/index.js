import React from "react";

const Select = ({ value, update }) => {
  return (
    <>
      <label className="styleLabel py-2" htmlFor="job-status">
        Job Status:
      </label>
      <select
        className="styleSelect"
        defaultValue={value}
        name="jobStatus"
        id="job-status"
        onChange={update}
      >
        <option disabled value="">
          Please select:
        </option>
        <option value="wishlist">Wishlist</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>
    </>
  );
};

export default Select;
