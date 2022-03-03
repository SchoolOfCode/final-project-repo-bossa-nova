import React from "react";

const Select = ({ value, update }) => {
  return (
    <>
      <label htmlFor="job-status">Job Status:</label>
      <select
        defaultValue={value}
        name="jobStatus"
        id="job-status"
        onChange={update}
      >
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
